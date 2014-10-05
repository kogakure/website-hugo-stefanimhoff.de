require 'compass/import-once/activate'
require 'jekyll-assets'
require 'jekyll-assets/compass'
require 'uglifier'
require 'singularitygs'
require 'color-schemer'
require 'toolkit'
require 'modular-scale'
require 'breakpoint'

# Compass config
preferred_syntax = :scss
sass_dir = 'app/_assets/scss'
css_dir = 'app/_assets/stylesheets'
images_dir = 'app/_assets/images'
javascripts_dir = 'app/_assets/javascripts'
http_images_path = '/assets/images'
http_generated_images_path = '/assets/images'
output_style = :expanded
debug_info = false
extensions_dir = 'app/_bower_components'
relative_assets = false
line_comments = true
