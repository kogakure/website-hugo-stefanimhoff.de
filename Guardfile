$:.unshift File.expand_path("lib", File.dirname(__FILE__))

# A sample Guardfile
# More info at https://github.com/guard/guard#readme
require 'octopress'
require 'guard/jekyll'

configurator   = Octopress::Configuration.new
configuration  = configurator.read_configuration

stylesheets_dir    = "assets/stylesheets"

guard :compass do
  watch %r{^#{stylesheets_dir}/(.*)\.s[ac]ss$}
end

guard :jekyll do
  # If a template file changes, trigger a Jekyll build
  watch /^#{configuration[:source]}\/.+\.(md|markdown|textile|html|haml|slim|xml)/
end

guard :shell do
  # If a non template file changes, copy it to destination
  watch /^#{configuration[:source]}\/.+\.[^(md|markdown|textile|html|haml|slim|xml)]/ do |m|
    if File.exists?(m.first)
      file = File.basename(m.first)
      path = m.first.sub /^#{configuration[:source]}/, "#{configuration[:destination]}"
      FileUtils.mkdir_p path.sub /#{file}/,''
      FileUtils.cp m.first, path
      "Copied #{m.first} -> #{path}"
    end
  end
end
