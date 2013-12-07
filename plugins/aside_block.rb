#
# Author: Stefan Imhoff
#
# Outputs a aside tag
#
#   {% aside aside--left %}
#   ...
#   {% endaside %}
#
#   {% aside aside--right %}
#   ...
#   {% endaside %}

require './plugins/raw'

module Jekyll

  class AsideBlock < Liquid::Block
    include TemplateWrapper
    AsideWithClass = /([\w\s\-]+)/i

    def initialize(tag_name, markup, tokens)
      @class = nil
      if markup =~ AsideWithClass
        @class = $1
      end

      @class = @class.strip unless @class.nil?

      super
    end

    def render(context)
      content = super
      content = content.strip

      if @class
        source = "<aside class=\"#{@class}\">\n"
      else
        source = "<aside>\n"
      end

      source += content

      source += "\n</aside>"

      output = "<div class=\"aside-block\">\n"
      output += source
      output += "\n</div>"

      output
    end

  end
end

Liquid::Template.register_tag('aside', Jekyll::AsideBlock)
