module Jekyll

  class Preview < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      super
    end

    def render(context)
      if ENV.has_key?('JEKYLL_ENV')
        true
      else
        false
      end
    end
  end
end

Liquid::Template.register_tag('preview', Jekyll::Preview)
