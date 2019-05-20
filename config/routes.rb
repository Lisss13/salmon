Rails.application.routes.draw do
  get 'prise', to: 'price_list#index'
  post 'prise', to: 'price_list#create'
  get 'thank', to: 'feedbacks#thank'
  resources :feedbacks
  get 'admin', to: 'admin#index'
  devise_for :users
  get 'contact', to: 'contacts#index'
  get 'about', to: 'about#index'
  get 'range', to: 'range#index'
  root 'main#index'
end
