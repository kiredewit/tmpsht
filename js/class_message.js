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
			this.messages = new Array();
		},
		addMessage : function(username,tag,message,time,like,dislike,location){
		console.log("Add Message");
			var message = new cls_message();
			message.setMessage('0',username,tag,message,time,like,dislike,location);
			this.messages.push(message);
		},
		uploadMessage : function(userid,message){
			console.log("Upload Message");
			jQuery.ajax({
				type: "POST",
				async : "false",
				url: "http://erikwwj53.fiftythree.axc.nl/shout/api/addMessage.php",
				crossDomain: true,
				data: {
					userid: userid,
					message: message
				},
				success: function( data ) {
					this.drawMessage();
					console.log("SUCCES");
				},
				error: function(data){
					console.log(data);
				}			
				});
		},
		drawMessage : function(){
			jQuery('<div class="row">\
				<div class="col-xs-12 col-md-12 messagebox">\
					<div class="row messagebox_header">\
						<div class="col-md-3" align="left">Time: 22:36 - 33 min ago</div>\
						<div class="col-md-3" align="center":>user: annomyous</div>\
						<div class="col-md-3" align="right">location: Amsterdam </div>\
						<div class="col-md-3" align="right">Likes: 11 | Dislike: 2 </div>\
					</div>	\
					<div class="row">\
						<div class="col-xs-12 col-md-12" align="left">contentasd sada<br>asdasdasdasdasdadasdasd<br>asdasdasdasdasdsds</div>\
					</div>\
					<div class="row messagebox_buttons">\
						<div class="col-xs-6 col-md-6 like" align="center">Like</div>\
						<div class="col-xs-6 col-md-6 dislike" align="center">Dislike</div>\
					</div>\
				</div>\
			</div>' ).prependTo( '#content' ).hide().show('slow');;
		}
	}

	