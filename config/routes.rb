Rails.application.routes.draw do
  get 'uploads/index'
  get 'uploads/new'
  get 'uploads/create'
  get 'uploads/destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #

  namespace :api do
    namespace :v1, defaults: { format: 'json' } do
      get :hello, to: 'hellos#index'
      resources :upload, only: [:index, :new, :create, :destroy]
    end
  end
end
