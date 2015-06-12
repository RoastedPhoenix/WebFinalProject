require 'bundler'
Bundler.require

get '/' do
  erb :HowToPlay
end

get '/viral_survival' do
  erb :viral_survival
end
