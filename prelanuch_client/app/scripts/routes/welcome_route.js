PrelanuchClient.WelcomeRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function(){
    	var para;
		$.urlParam = function(){
    		//alert(window.location.href);
    		var results = window.location.href.split("/");
    		//alert(results[5]);
    		if(results[5]!=null){
    			return results[5];
    		}else{
    			return null;
    		}
			
				
		
			
		};
		code = $.urlParam();
		//alert(code);
		//;
			//ajax server to retrive other data
			//welcome/index
			
		$.when($.ajax({
		  type: 'POST',
		  url: "http://ec2-54-186-146-19.us-west-2.compute.amazonaws.com:3000/welcome/index",
		  //url: "http://localhost:3000/welcome/index",
		  data: {iCode : code},
		  /*
		  success: function (data){
		  	//alert(data.uniqueLink);
		  	para =  data;
		  	return para;
		  },
		*/
		  async:false
		})).then(function(data, textStatus, jqXHR){
			//alert(data.uniqueLink);
			para = data;
			return data;
			
		});
		return para;
		//alert(para.uniqueLink);
		//var url="http://localhost:3000/welcome/index?iCode="+code;
		//return para;
		/*
		var request = $.post(
	    		"http://localhost:3000/welcome/index",
	    		{iCode : code})
	    			.done(function(data){
	    				para = data;
	    			//alert(data.uniqueLink);	
					return para;
	    		//alert("success");
	    		})
	    		.fail(function(data){$("#response").html(data.toString);});
	    		*/
   }

});
