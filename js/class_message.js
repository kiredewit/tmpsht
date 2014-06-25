	var cls_message = Class.create();
	cls_message.prototype = {
		initialize : function(){
			this.id = "";
			this.username = "";
			this.tag = "";
			this.message = "";
			this.time = "";
			this.like = "";
			this.dislike = "";
			this.location = "";
		},
		setMessage : function(id,username,tag,message,time,like,dislike,location){
			this.id = id;
			this.username = username;
			this.tag = tag;
			this.message = message;
			this.time = time;
			this.like = like;
			this.dislike = dislike;
			this.location = location;
		}
	}
	
	var cls_messages = Class.create();
	cls_messages.prototype = {
		initialize : function(){
			this.messages = new array();
		},
		addMessage : function(username,tag,message,time,like,dislike,location){
			var message = new cls_message();
			message.setMessage('0',username,tag,message,time,like,dislike,location);
			this.messages.push(message);
		},
		uploadMessage : function(userid,message){
		$.ajax({
			type: "POST",
			async : "false",
			url: "api/addMessage.php",
			data: {
				userid: userid,
				message: reference
			},
			success: function( data ) {
				
			}	
			});
		}
	}
	
	