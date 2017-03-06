Rails.application.routes.draw do
  get 'pages/index'

  root :to => 'pages#home'
  resources :users
  resources :galleries
  resources :images

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end
