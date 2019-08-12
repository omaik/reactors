module Api
  module V1
    class HellosController < ApplicationController
      def index
        hellos = ['hello1', 'hello2']
        render json: { hellos: hellos }
      end
    end
  end
end
