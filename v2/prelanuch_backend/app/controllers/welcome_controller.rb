class WelcomeController < ApplicationController
  def index
    #get email address from client 
    @iCode = params[:iCode]
    @visitor = Visitor.find_by invite_code:@iCode
    if @visitor != nil
      #generate unique link
      @uniqueLink = "http://ec2-54-186-146-19.us-west-2.compute.amazonaws.com:9001/index.html?user=" + @visitor.invite_code
      #check if he/she already a host
      @host = Host.find_by email:@visitor.email
      
      if @host !=nil
        @isHost = 1
        @hostShares = @visitor.shares
        render :json => {
            :uniqueLink => @uniqueLink,
            :isHost => @isHost,
            :hostShares => @hostShares
        }
      else
        @isHost = 0
        @hostShares = @visitor.shares
        render :json => {
            :uniqueLink => @uniqueLink,
            :isHost => @isHost,
            :hostShares => @hostShares
        }
      end
    else
      #return error code 01 not validated user
      render :json => {
            :error => "01"
        }
    end
  end
end
