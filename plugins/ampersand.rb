module Jekyll
  module AmpersandFilter
    def ampersand(input)
      input.gsub /(&amp;|&)(?!.*">.*<\/a>)(?!amp;shy;)(?!nbsp;)(?!shy;)(?!gt;)(?!lt;)/, '<span class="amp">&amp;</span>'
    end
  end
end

Liquid::Template.register_filter(Jekyll::AmpersandFilter)