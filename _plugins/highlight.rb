require "set"

# Destaca em negrito, nas listas de autores das publicações, os nomes dos
# membros e egressos do laboratório (arquivos em _members/).
# Reconhece o nome completo, os "aliases" de cada pessoa e as formas
# abreviadas mais comuns (ex.: "Gabriela P. Camacho", "G. P. Camacho",
# "GP Camacho", "Gabriela Camacho", "G. Camacho").
# Para não destacar uma pessoa, use "highlight: false" no arquivo dela.

module Jekyll
  module HighlightMembers
    PARTICLES = %w[de da do das dos e del la van von der].freeze

    def self.normalize(text)
      text.to_s
        .unicode_normalize(:nfkd)
        .gsub(/\p{Mn}/, "")
        .downcase
        .gsub(/[.,]/, " ")
        .gsub(/-/, " ")
        .split
        .reject { |word| PARTICLES.include?(word) }
        .join(" ")
    end

    def self.variants(name)
      words = normalize(name).split
      return [] if words.length < 2
      family = words[-1]
      given = words[0..-2]
      initials = given.map { |word| word[0] }
      forms = [
        words.join(" "),
        "#{given[0]} #{family}",
        ([given[0]] + initials[1..]).push(family).join(" "),
        (initials + [family]).join(" "),
        "#{initials.join} #{family}",
        "#{initials[0]} #{family}",
      ]
      # sobrenome duplo (ex.: "G. Procópio Camacho")
      if given.length >= 2
        forms << "#{given[0]} #{given[-1]} #{family}"
        forms << "#{initials[0]} #{given[-1]} #{family}"
      end
      forms.uniq
    end

    def self.names(site)
      @names ||= {}
      @names[site.object_id] ||= begin
        collection = site.collections["members"]
        docs = collection ? collection.docs : []
        docs.each_with_object(Set.new) do |doc, set|
          next if doc.data["highlight"] == false
          variants(doc.data["name"]).each { |form| set << form }
          Array(doc.data["aliases"]).each { |a| set << normalize(a) }
        end
      end
    end

    def highlight_members(authors)
      return authors unless authors.is_a?(Array)
      site = @context.registers[:site]
      known = HighlightMembers.names(site)
      authors.map do |author|
        text = author.to_s.strip
        if text != "..." && known.include?(HighlightMembers.normalize(text))
          "**#{text}**"
        else
          text
        end
      end
    end
  end
end

Jekyll::Hooks.register(:site, :pre_render) do |site|
  Jekyll::HighlightMembers.instance_variable_set(:@names, nil)
end

Liquid::Template.register_filter(Jekyll::HighlightMembers)
