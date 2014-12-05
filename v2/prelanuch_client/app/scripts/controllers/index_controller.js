PrelanuchClient.IndexController = Ember.Controller.extend({
	search: '',
	
	disabled: function() {	
    	return Ember.isEmpty(this.get('search'));
  	}.property('search'),
	actions: { 
	    saveToServer:function(){
	    	//input val
	    	
	    	
	    	
			var code = getUrlParameter('user');
			//alert(code);
			
	    	var email = this.get('search');
	    	
	    	if(isValidEmailAddress( email ) ){
	    		var request = $.post(
	    		"http://ec2-54-186-146-19.us-west-2.compute.amazonaws.com:3000/prelanuch/index",
	    		//"http://localhost:3000/prelanuch/index",
	    		{ email: email, code : code})
	    			.done(function(data){
	    			$("#emailAlert").css({visibility: "visible"});
	    			$("#emailAlert").html("<strong>Thanks!</strong> Your request has been received and we will contact you via email.");
					//alert(data.result);
	    		//alert("success");
	    		})
	    		.fail(function(data){
	    			$("#emailAlert").css({visibility: "visible"});
	    			$("#emailAlert").html("<strong>Warning!</strong> Server error, please try later.");
	    		});
	    		
	    	}else{
	    		
	    		
	    		$("#emailAlert").css({visibility: "visible"});
	    		$("#emailAlert").html("<strong>Warning!</strong> Please input an email address.");
	    	}
	    },
	    

  }
  
});
function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};