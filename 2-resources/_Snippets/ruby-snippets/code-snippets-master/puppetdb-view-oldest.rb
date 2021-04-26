#!/usr/bin/ruby

# A simple hacky script to query the v3 PuppetDB API and show the 10 oldest active nodes

require 'rubygems'
require 'puppet'
require 'json'
require 'uri'
require 'puppet/util/puppetdb'
require 'puppet/util/run_mode'
require 'puppet/network/http_pool'
require 'time'


Puppet.settings.preferred_run_mode = :master
Puppet.settings.initialize_global_settings
Puppet.settings.initialize_app_defaults(Puppet::Settings.app_defaults_for_run_mode(Puppet.run_mode))

puts "Querying PuppetDB at %s:%s" % [Puppet::Util::Puppetdb.server, Puppet::Util::Puppetdb.port]
puts

http = Puppet::Network::HttpPool.http_instance(Puppet::Util::Puppetdb.server, Puppet::Util::Puppetdb.port, true)
headers = { "Accept" => "application/json" }
resp = http.get("/v3/nodes", headers)
nodes = JSON.parse(resp.body).reject{|n| n["deactivated"]}
active_nodes = nodes.reject{|n| n["deactivated"]}
deactivated_nodes = nodes.select{|n| n["deactivated"]}
longest_node_name = nodes.map{|n| n["name"].size}.max

puts "   Total Nodes: %d" % nodes.size
puts "  Active Nodes: %d" % active_nodes.size
puts "Inactive Nodes: %d" % deactivated_nodes.size
puts
puts "10 oldest active nodes:"

active_nodes.size >= 10 ? start = -10 : start = 0

active_nodes.sort_by{|n| Time.parse(n["report_timestamp"])}[start..-1].each do |node|
  puts "%#{longest_node_name + 5}s: %s" % [node["name"], Time.parse(node["report_timestamp"])]
end

puts
