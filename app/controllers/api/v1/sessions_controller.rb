module Api
  module V1
    class SessionsController < Devise::SessionsController

      def create
        user = User.find_by_email(sign_in_params[:email])

        if user && user.valid_password?(sign_in_params[:password])
          @current_user = user

          render template: "api/v1/devise/sessions/create.json.jbuilder", locals: { current_user: @current_user }
        else
          render json: { errors: { 'email or password' => ['is invalid'] } }, status: :unprocessable_entity
        end
      end
    end
  end
end
