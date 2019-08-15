module Api
  module V1
    class UploadsController < ApplicationController
      def index
        @uploads = Upload.all
        # byebug
        # render json: @uploads.map { |upload| upload_json(upload) }, methods: :video_url
      end

      def show
        @upload = Upload.find(params[:id])
        # render :show
        render json: upload_json(@upload)
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

      def upload_json(upload)
        upload.as_json.merge({ video: url_for(upload.video)})
      end

    end
  end
end
