Rails.application.routes.draw do
  get 'contact', to: 'contacts#index'
  get 'about', to: 'about#index'
  get 'range', to: 'range#index'
  root 'main#index'
end
