class SuggesthostsController < ApplicationController
  before_action :set_suggesthost, only: [:show, :edit, :update, :destroy]

  # GET /suggesthosts
  # GET /suggesthosts.json
  def index
    @suggesthosts = Suggesthost.all
  end

  # GET /suggesthosts/1
  # GET /suggesthosts/1.json
  def show
  end

  # GET /suggesthosts/new
  def new
    @suggesthost = Suggesthost.new
  end

  # GET /suggesthosts/1/edit
  def edit
  end

  # POST /suggesthosts
  # POST /suggesthosts.json
  def create
    @suggesthost = Suggesthost.new(suggesthost_params)

    respond_to do |format|
      if @suggesthost.save
        format.html { redirect_to @suggesthost, notice: 'Suggesthost was successfully created.' }
        format.json { render :show, status: :created, location: @suggesthost }
      else
        format.html { render :new }
        format.json { render json: @suggesthost.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /suggesthosts/1
  # PATCH/PUT /suggesthosts/1.json
  def update
    respond_to do |format|
      if @suggesthost.update(suggesthost_params)
        format.html { redirect_to @suggesthost, notice: 'Suggesthost was successfully updated.' }
        format.json { render :show, status: :ok, location: @suggesthost }
      else
        format.html { render :edit }
        format.json { render json: @suggesthost.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /suggesthosts/1
  # DELETE /suggesthosts/1.json
  def destroy
    @suggesthost.destroy
    respond_to do |format|
      format.html { redirect_to suggesthosts_url, notice: 'Suggesthost was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_suggesthost
      @suggesthost = Suggesthost.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def suggesthost_params
      params.require(:suggesthost).permit(:name, :email)
    end
end
