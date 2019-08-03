module Api
  module V1
    class HellosController < ApplicationController
      def index
        render json: { text: 'Hello' }
      end
    end
  end
end

