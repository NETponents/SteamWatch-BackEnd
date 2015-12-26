#!/usr/bin/env ruby
require 'rubygems'
require 'sinatra'
require 'slim'
require 'rest-client'
require 'json'
require 'sinatra/activerecord'

set :port, ENV['PORT'] || 8080
set :bind, ENV['IP'] || '0.0.0.0'

get '/' do
  slim :index
end

get '/status/:id/:key' do

end
