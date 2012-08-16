require 'yaml'

module Jekyll
  module AbbreviationFilter
    def abbr(input)
      plugin_root = File.dirname(__FILE__)
      abbr_dict = YAML.load(File.open(File.join(plugin_root, "abbreviation.yml")))
      abbr_dict.each do |abbr, title|
        input.gsub! /#{abbr}(?![^">]+">|<\/abbr>|">)/, "<abbr title=\"#{title}\">#{abbr[/[A-Za-z0-9\.\s\;\&]+/]}</abbr>"
      end
      input
    end
  end
end

Liquid::Template.register_filter(Jekyll::AbbreviationFilter)
