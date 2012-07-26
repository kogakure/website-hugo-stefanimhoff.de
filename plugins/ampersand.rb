module Jekyll
  module AmpersandFilter
    def ampersand(input)
      input.gsub /(\s&amp;\s)(?![\w\d\s']*")/, '<span class="amp">&nbsp;&amp;&nbsp;</span>'
    end
  end
end

Liquid::Template.register_filter(Jekyll::AmpersandFilter)
