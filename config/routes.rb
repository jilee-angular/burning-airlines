Rails.application.routes.draw do

  resources :flights
  resources :airplanes
  resources :reservations
  resources :users

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

  get '/sign_up' => 'users#new'
  post '/sign_up' => 'users#create'



  get '/search' => 'flights#search'


end
