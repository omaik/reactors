class UploadsController < ApplicationController
  def index
    @uploads = Upload.all
  end

  def new
    @upload = Upload.new
    render json: @image
  end

  def create
    @upload = Upload.new(params)
    if @upload.save
      render json: @upload, status: :created
    end
  end

  def destroy
    Upload.find(params[:id]).destroy
    render :head
  end
end
