Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      resources :drinks, only: %i[index create delete]
      get '/drinks/:slug', to: 'drinks#show'
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
    end
  end
end
