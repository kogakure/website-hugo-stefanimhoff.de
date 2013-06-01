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

# require './plugins/raw'

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

      if @class
        source = "<div class=\"figure\"><figure class=\"#{@class}\"><div>"
      else
        source = "<div class=\"figure\"><figure><div>"
      end

      source += content

      if @caption
        source += "</div><figcaption>#{@caption}</figcaption>"
      else
        source += "</div>"
      end

      source += "</figure></div>"
      source
    end

  end
end

Liquid::Template.register_tag('figure', Jekyll::FigureBlock)
