#
# Author: Stefan Imhoff
#
# Outputs a blockquote class "verse" with pre inside to keep the lines
#
#   {% verse %}
#   ...
#   {% endverse %}

require './plugins/raw'

module Jekyll

  class VerseBlock < Liquid::Block
    include TemplateWrapper
    FigureWithClassCaption = /([^"]+)"([^"]+)"/i
    FigureWithCaption = /"([^"]+)"/i
    FigureWithClass = /([\w\s]+)/i

    def initialize(tag_name, markup, tokens)
      super
    end

    def render(context)
      content = super
      source = "<blockquote class=\"verse\"><pre>"
      source += content
      source += "</pre></blockquote>"
      source = safe_wrap(source)
      source
    end

  end
end

Liquid::Template.register_tag('verse', Jekyll::VerseBlock)
