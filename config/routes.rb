Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #

  namespace :api do
    namespace :v1, defaults: { format: 'json' } do
      get :hello, to: 'hellos#index'
    end
  end
end
