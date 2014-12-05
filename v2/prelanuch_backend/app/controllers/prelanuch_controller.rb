class PrelanuchController < ApplicationController
  require 'securerandom'
  skip_before_filter :verify_authenticity_token, :only => [:ipn_notification]
  def index
    @email = params[:email]
    @code = params[:code]
    if @email != nil
      #check if email has been registered
      @currentVisitor = Visitor.find_by email:@email
      if @currentVisitor == nil
        #regist
        @currentVisitor = Visitor.new
        @currentVisitor.email = @email
        if @code != nil
          @currentVisitor.code = @code
          @hostVisitor = Visitor.find_by invite_code:@code
          if @hostVisitor !=nil
            if @hostVisitor.shares == nil
               @hostVisitor.shares = 1
            else
                @hostVisitor.shares = @hostVisitor.shares + 1
            end
            @hostVisitor.save
          end
          
        end
        #generate random code
        @inviteCode = SecureRandom.hex(3)
        @currentVisitor.invite_code = @inviteCode
        @currentVisitor.shares = 0;
        
        if @currentVisitor.save
          TripalocalMailer.welcome_email(@currentVisitor).deliver
          render :json => {
            :result => "11" #success
          }
        else
          render :json => {
            :result => "02" #server error
          }
        end       
      else
        render :json => {
          :result => "01" #email has been registered
        }
      end
      
      #logger.info("email: " + @email)
      #logger.info("code: " + @code)
      #check 
      #render :json => {
      #  :result => "i get response!"
      #}
    end
  end
  
end
