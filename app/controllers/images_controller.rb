class ImagesController < ApplicationController

  before_action :check_if_logged_in, :only => [:new, :create, :update]

  def index
    @images = Image.all
  end

  def new
    @image = Image.new
  end

  def create
    @image = Image.new #image_params

    if params[:file].present?
      req = Cloudinary::Uploader.upload( params[:file] )
      @image.url = req["public_id"]
    end
    @image.save
    @current_user.images << @image
    redirect_to @image
  end

  def edit
    @image = Image.find params[:id]
  end

  def show
    @image = Image.find params[:id]
  end

  def destroy
    image = Image.find params[:id]
    image.destroy
    redirect_to images_path
  end

  def mine
    @images = @current_user.images
    render :index
  end


  private

  def  image_params
    raise params.inspect
    params.require(:image).permit(:url, :user_id, :title) # TODO: params
  end
end
