class SuggestHostsController < ApplicationController
  def index
     @hosts = params[:hosts]
     if @hosts != nil
       json = JSON.parse(@hosts)
       json.each do |hostInf|
         if hostInf["name"]!="" && hostInf["email"]!=""
           if valid_email?(hostInf["email"])
             @aHost = Suggesthost.find_by email:hostInf["email"]
             if @aHost == nil
                @savHost = Suggesthost.new
                @savHost.name = hostInf["name"]
                @savHost.email = hostInf["email"]
                @savHost.save
             end
           end
           
           
           logger.info("name: " + hostInf["name"])
           logger.info("name: " + hostInf["email"])
         end
         
       end
     end
     
  end
private
  def valid_email?(email)
    @VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
    (email =~ @VALID_EMAIL_REGEX)
    #logger.info("name: " + (email =~ @VALID_EMAIL_REGEX))
  end

end
