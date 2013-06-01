# Author: Brandon Mathis
# Description: Provides plugins with a method for wrapping and unwrapping input to prevent Textile from parsing it.
# Purpose: This is useful for preventing Textile from being too aggressive and incorrectly parsing in-line HTML.
module TemplateWrapper
  # Escape content for Textile with <notextile>
  def safe_wrap(input)
    "<div><notextile>#{input}</notextile></div>"
  end
end

# Author: phaer, https://github.com/phaer
# Source: https://gist.github.com/1020852
# Description: Raw tag for jekyll. Keeps liquid from parsing text betweeen {% raw %} and {% endraw %}

module Jekyll
  class RawTag < Liquid::Block
    def parse(tokens)
      @nodelist ||= []
      @nodelist.clear

      while token = tokens.shift
        if token =~ FullToken
          if block_delimiter == $1
            end_tag
            return
          end
        end
        @nodelist << token if not token.empty?
      end
    end
  end
end

Liquid::Template.register_tag('raw', Jekyll::RawTag)
