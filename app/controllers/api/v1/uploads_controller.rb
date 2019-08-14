module Api
  module V1
    class UploadsController < ApplicationController
      def index
        @uploads = Upload.all
        # render json: @uploads.with_attached_video
        render json: @uploads.map do |upload|
          upload.as_json.merge({ video: url_for(upload.video)})
        end
      end

      def show
        @upload = Upload.find(params[:id])
        upload_json = {
          "name" => @upload.name,
          "description" => @upload.description,
          "video" => url_for(@upload.video)
        }

        render json: upload_json
      end

      def create
        @upload = Upload.create!(uploads_params)
        if @upload.save
          render json: { status: :created }
        else
          render json: @upload.errors, status: :unprocessable_entity
        end
      end

      def destroy
        Upload.find(params[:id]).destroy
        render :head
      end

      private
      def uploads_params
        params.permit(:name, :description, :video)
      end
    end
  end
end
