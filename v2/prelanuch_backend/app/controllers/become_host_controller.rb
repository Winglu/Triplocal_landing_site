class BecomeHostController < ApplicationController
  def index
    @iCode = params[:code]
    @firstName = params[:bFName]
    @lastName = params[:bLName]
    @location = params[:bLocation]
    @title = params[:bTitle]
    @bDes = params[:bDes]
    @bPer = params[:bPer]
    @visitor = Visitor.find_by invite_code:@iCode
    if @visitor != nil
      @newHost = Host.new
      @newHost.email = @visitor.email
      @newHost.firstName = @firstName
      @newHost.lastName = @lastName
      @newHost.location = @location
      @newHost.title = @title
      @newHost.des = @bDes
      @newHost.perDes = @bPer
      if @newHost.save
        render :json => {
            :msg => "11"
        }
      else
        render :json => {
           #
            :msg => "01"
        }
      end
    else
      render :json => {
           #error visitor not validated
            :msg => "02"
        }
    end
  end
end
