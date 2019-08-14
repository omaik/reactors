Rails.application.routes.draw do
  scope '/api' do
    scope '/v1' do
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
    end
  end

  namespace :api do
    namespace :v1, defaults: { format: 'json' } do
      get :hello, to: 'hellos#index'

      resource :users, only: [:show, :update]
    end
  end
end
