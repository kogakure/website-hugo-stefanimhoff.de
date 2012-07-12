require "rubygems"
require "bundler/setup"
require "stringex"

# Config
source_dir  = "source" # source file directory
server_port = "4000"   # port for preview server eg. localhost:4000

# Jekyll
desc "Generate Jekyll site"
task :generate do
  raise "You need a source directory" unless File.directory?(source_dir)
  puts "## Generating site with Jekyll."
  system "compass compile --css-dir #{source_dir}/stylesheets"
  system "jekyll"
end



desc "Watch the site and regenerate when it changes"
task :watch do
  raise "You need a source directory" unless File.directory?(source_dir)
  puts "## Starting to watch source with Jekyll and Compass."
  system "compass compile --css-dir #{source_dir}/stylesheets" unless File.exists("#{source_dir}/stylesheets/screen.css")
  jekyllPid = Process.spawn({"JEKYLL_ENV" => "preview"}, "jekyll --auto")
  compassPid = Process.spawn("compass watch")

  trap("INT") {
    [jekyllPid, compassPid].each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
    exit 0
  }

  [jekyllPid, compassPid].each { |pid| Process.wait(pid) }
end



desc "Preview the site in a web browser"
task :preview do
  raise "You need a source directory" unless File.directory?(source_dir)
  puts "## Starting to watch source with Jekyll and Compass. Starting Rack on port #{server_port}"
  system "compass compile --css-dir #{source_dir}/stylesheets" unless File.exists("#{source_dir}/stylesheets/screen.css")
  jekyllPid = Process.spawn({"JEKYLL_ENV" => "preview"}, "jekyll --auto")
  compassPid = Process.spawn("compass watch")
  rackupPid = Process.spawn("rackup --port #{server_port}")

  trap("INT") {
    [jekyllPid, compassPid, rackupPid].each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
    exit 0
  }

  [jekyllPid, compassPid, rackupPid].each { |pid| Process.wait(pid) }
end
