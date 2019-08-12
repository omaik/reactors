Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #

  namespace :api do
    namespace :v1, defaults: { format: 'json' } do
      get :hello, to: 'hellos#index'

      devise_for :users,
                 path: '',
                 path_names: {
                  sign_in: 'login',
                  sign_out: 'logout',
                  registration: 'signup'
                 },
                 controllers: {
                  sessions: 'api/v1/sessions'
                 }

      resource :users, only: [:show, :update]
    end
  end
end
