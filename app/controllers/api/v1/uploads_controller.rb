module Api
  module V1
    class UploadsController < ApplicationController
      def index
        @uploads = Upload.all
      end

      def new
        @upload = Upload.new
        render json: @image
      end

      def create
        @upload = Upload.new(attachment_params)
        if @upload.save
          render json: @upload, status: :created
        else
          render json: @upload.errors, status: :unprocessable_entity
        end
      end

      def destroy
        Upload.find(params[:id]).destroy
        render :head
      end

      private
      def attachment_params
        params.permit(attachment: [])
      end
    end
  end
end
