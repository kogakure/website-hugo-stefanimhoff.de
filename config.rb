# Require any additional compass plugins here.
require 'sass-globbing'
require 'singularitygs'
require 'singularity-extras'
require 'color-schemer'
require 'toolkit'
require 'modular-scale'
require 'breakpoint'

project_type = :stand_alone

# Publishing paths
http_path = "/"
http_images_path = "/images"
http_generated_images_path = "/images"
http_fonts_path = "/fonts"
css_dir = "public/assets/stylesheets"

# Local development paths
sass_dir = "sass"
images_dir = "source/assets/images"
fonts_dir = "source/assets/fonts"
generated_images_dir = "source/assets/images"

output_style = :expanded
line_comments = true
