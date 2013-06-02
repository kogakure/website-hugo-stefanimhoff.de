#
# Author: Stefan Imhoff
#
# Outputs a figure with optional class(es) and optional figcaption
#
#   {% figure class1 class2 class3 "This is the figcaption" %}
#   ...
#   {% endfigure %}
#
#   {% figure class %}
#   ...
#   {% endfigure %}
#
#   {% figure "This is the figcaption" %}
#   ...
#   {% endfigure %}
#
#   {% figure %}
#   ...
#   {% endfigure %}

module Jekyll

  class FigureBlock < Liquid::Block
    include TemplateWrapper
    FigureWithClassCaption = /([^"]+)"([^"]+)"/i
    FigureWithCaption = /"([^"]+)"/i
    FigureWithClass = /([\w\s]+)/i

    def initialize(tag_name, markup, tokens)
      @class = nil
      @caption = nil
      if markup =~ FigureWithClassCaption
        @class = $1
        @caption = $2
      elsif markup =~ FigureWithCaption
        @caption = $1
      elsif markup =~ FigureWithClass
        @class = $1
      end

      @caption = @caption.strip unless @caption.nil?
      @class = @class.strip unless @class.nil?

      super
    end

    def render(context)
      content = super
      content = content.strip

      if @class
        source = "<figure class=\"#{@class}\">\n<div>"
      else
        source = "<figure>\n<div>"
      end

      source += content

      if @caption
        source += "</div><figcaption>#{@caption}</figcaption>\n"
      else
        source += "</div>"
      end

      source += "</figure>"

      output = "<div class=\"figure\">\n<notextile>\n"
      output += source
      output += "\n</notextile>\n</div>"

      output
    end

  end
end

Liquid::Template.register_tag('figure', Jekyll::FigureBlock)
