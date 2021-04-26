#!/bin/env ruby

# Small utility to run a command disassociated from the
# current process.
#
# You can optionally redirect STDERR or STDOUt to a file,
# change the directory where the command gets run and sleep
# a set or random amount of time before running the command
#
# R.I.Pienaar <rip@devco.net>

require 'optparse'

opt = OptionParser.new

options = {:stderr => "/dev/null",
           :stdout => "/dev/null",
           :chdir => "/",
           :chroot => false,
           :sleep => 0,
           :splay => 0,
           :command => false}

opt.on("--stderr DIR", "Where to direct STDERR, /dev/null otherwise") do |f|
  options[:stderr] = f
end

opt.on("--stdout DIR", "Where to direct STDOUT, /dev/null otherwise") do |f|
  options[:stdout] = f
end

opt.on("--chdir DIR", "Working directory, / otherwise") do |f|
  unless File.directory?(f) && File.executable?(f)
    abort "Cannot change to directory #{f}"
  end

  options[:chdir] = f
end

opt.on("--sleep SLEEP", "Sleep time before running command") do |f|
  options[:sleep] = Integer(f)
end

opt.on("--splay MAX", "Sleep for a random time no longer than MAX before running command") do |f|
  options[:splay] = Integer(f)
end

opt.on("--command COMMAND", "-c", "Command to run") do |f|
  options[:command] = f
end

begin
  opt.parse!
rescue => e
  abort e
end

def test_file(dir, file)
  if file.start_with?("/")
    f = file
  else
    f = File.join(dir, file)
  end

  begin
    File.open(f, "a").close
  rescue => e
    abort "Cannot write to #{f}: #{e}"
  end
end

test_file(options[:chdir], options[:stderr])
test_file(options[:chdir], options[:stdout])

abort "No command supplied" unless options[:command]

def daemonize(options)
  fork do
    Process.setsid
    exit if fork

    Dir.chdir(options[:chdir])
    STDIN.reopen("/dev/null")
    STDERR.reopen(options[:stderr], "a")
    STDOUT.reopen(options[:stdout], "a")

    yield
  end
end

daemonize(options) do
  if options[:sleep] > 0
    sleep options[:sleep]
  elsif options[:splay] > 0
    sleep rand(options[:splay])
  end

  exec(options[:command])
end
