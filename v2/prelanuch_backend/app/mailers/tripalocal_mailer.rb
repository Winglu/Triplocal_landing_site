class TripalocalMailer < ActionMailer::Base
  default from: "tripalocal@example.com"
  
  def welcome_email(user)
    @user = user
    logger.info("email: " + @user.email)
    @uniqueLink = "http://ec2-54-186-146-19.us-west-2.compute.amazonaws.com:9001/#/welcome/" + @user.invite_code
    mail(:to=>@user.email,:subject=>"Welcome to Tripalocal")
  end
end
