PrelanuchClient.WelcomeController = Ember.Controller.extend({
	disabled: function() {	
    	return Ember.isEmpty(this.get('sEmail'));
  	}.property('sEmail'),
  	test: function(){
  		return "aaaa";
  	},
  	fetchUniqueLink : function(){
  		var link = this.get('model.uniqueLink');
  		return link;
  	}.property('model.uniqueLink'),
	actions: {
		
		removeAHost:function(){
			//var list = $("#sHostC p").length;
			$('#sHostC p:last-child').remove();
			
			//alert(list);
			//$("#sHostC").
		},
		addAHost:function(){
			var id = $("#sHostC p").length;
			$("#sHostC").append('<p><input class="input-lg" name=name"'+id+'" type="text" value="Name" size="10">&nbsp;<input class="input-lg" name="email'+id+'" type="text" value="Email" size="25"></p>');
		},
		becomeHost:function(){
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
	 		var bFName = this.get("bFName")||"";
	 		var bLName = this.get("bLName")||"";
	 		var bLocation = this.get("bLocation")||"";
	 		var bTitle = this.get("bTitle")||"";
	 		var bDes = this.get("bDes")||"";
	 		var bPer = this.get("bPer")||"";
	 		
	 		//validate input
	 		if(bFName=="" || bLName=="" || bLocation==""|| bTitle=="" || bDes=="" || bPer==""){
	 			$("#bError").html("<p>All field are necessary!</p>");
	 		}else{
	 			$("#bError").html("");
	 			//send ajax to server
	 			var request = $.post(
					/*call server via ajax*/
		    		"http://ec2-54-186-146-19.us-west-2.compute.amazonaws.com:3000/become_host/index",
		    		//"http://localhost:3000/become_host/index",
		    		{ 
		    			code : code,
		    			bFName: bFName, 
		    			bLName : bLName,
		    			bLocation : bLocation,
		    			bTitle : bTitle,
		    			bDes : bDes,
		    			bPer : bPer
		    		})
		    			.done(function(data){
		    				alert("success");
		    				//window.location.replace(window.location.href);
		    			//this.transitionTo(window.location.href);	
						//alert(data.result);
		    		//alert("success");
		    		})
		    		.fail(function(data){
		    			alert(data);
		    		});
	 		}
	 		
	 		//alert(bFName+bLName+bLocation+bTitle+bDes+bPer);
		},
		saveSuggest:function(){

			//var sName = this.get("sName");
			//var sEmail = this.get("sEmail");
			var sHosts = $("#sHostC p");
			var hostInput = sHosts[0];
			var hostInputs = $(sHosts[0]).find("input");
			//alert(hostInputs[0].value);
			//alert(hostInputs[1].value);
			var hostList = new Array();
			$("#sHostC p").each(function(index){
				var hostInputs = $(this).find("input");
				var aSHost = PrelanuchClient.SHost.create({
					name : hostInputs[0].value,
					email : hostInputs[1].value
				});
				hostList.push(aSHost);
				//alert(index+" "+hostInputs[0].value+" "+hostInputs[1].value);
			});
			var hostsJson = JSON.stringify(hostList);
			//alert(myJsonString);
			var request = $.post(
	    		"http://ec2-54-186-146-19.us-west-2.compute.amazonaws.com:3000/suggest_hosts/index",
	    		//"http://localhost:3000/suggest_hosts/index",
	    		{hosts:hostsJson})
	    			.done(function(data){
					//alert("success");
	    		//alert("success");
	    		})
	    		.fail(function(data){
	    			//alert("fail");
	    		});
	    		/*
			Ember.$.ajax(
				//url
				"http://localhost:3000/suggest_hosts/index",
				{
					type: "PSOT",
					data: {hosts:hostsJson},
					success:function(data){
						alert("success");
					},
					error: function(){
						alert("fail");
					}
				}
			);
*/
			/*
			var isEmailVaildated, isNameValidated;
			if(isValidEmailAddress( sEmail )){
				isVaildated = true;
			}else{
				isVaildated = false;
				$("#infoEmail").html("Please input an email address!");
			}
			
			if(sName != ""&& sName != null){
				isNameValidated = true;
			}else{
				isNameValidated = false;
				$("#infoName").html("Please input the host name!");
			}
			*/
			if(isVaildated && isNameValidated){
				var request = $.post(
					/*call server via ajax*/
		    		//"http://localhost:3000/become_host/index",
		    		{ 
		    			email: sEmail, 
		    			name : sName
		    		})
		    			.done(function(data){
						alert(data.result);
		    		//alert("success");
		    		})
		    		.fail(function(data){$("#response").html(data.toString);});
			}
		},
		
		applyHost:function(){
			
		},
		
	}
});
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};