#
# Author: Stefan Imhoff
#
# Outputs a link to a file download in an container
#
#   {% download my-file-name.zip "This is my file" %}

module Jekyll

  class DownloadTag < Liquid::Tag
    TextWithLink = /(.+)\s"(.+?)"/i

    def initialize(tag_name, markup, tokens)
      @link = nil
      @text = nil

      if markup.strip =~ TextWithLink
        @link = $1
        @text = $2
      end
      super
    end

    def render(context)
      "<div class=\"download\">\n<p><a href=\"#{@link}\"><i class=\"icon-download\"></i>#{@text}</a></p>\n</div>"
    end
  end
end

Liquid::Template.register_tag('download', Jekyll::DownloadTag)