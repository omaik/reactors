Rails.application.routes.draw do
  get 'profiles/index'
  get 'profiles/create'
  get 'profiles/destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #

  namespace :api do
    namespace :v1, defaults: { format: 'json' } do
      get :hello, to: 'hellos#index'
      resources :uploads, only: [:index, :show, :create, :destroy]
    end
  end
end
