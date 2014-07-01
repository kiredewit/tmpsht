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
		},
		giveLike : function(){
			console.log("Add 1 Like");
			this.like = this.like + 1;
			
			jQuery.ajax({
					type: "POST",
					data: {
						msgid : this.id,
						like: "like"
					},
					async : false,
					url: "http://erikwwj53.fiftythree.axc.nl/shout/api/giveLike.php",
					crossDomain: true,
					success: function( data ) {				
						console.log("SUCCES");
							},
					error: function(data){
						console.log(data);
					}			
				})
		},
		giveDislike: function(){
			console.log("Add 1 DisLike");
			this.dislike = this.dislike + 1;
						jQuery.ajax({
					type: "POST",
					data: {
						msgid : this.id,
						like: "like"
					},
					async : false,
					url: "http://erikwwj53.fiftythree.axc.nl/shout/api/giveLike.php",
					crossDomain: true,
					success: function( data ) {				
						console.log("SUCCES");
							},
					error: function(data){
						console.log(data);
					}			
				})
		}
	}
	
	var cls_messages = Class.create();
	cls_messages.prototype = {
		initialize : function(){
			var parsedJSON;			
			var Jdata;
			this.messages = new Array();

			console.log("Download Messages");
			
			function getData(){
				var jData;
				jQuery.ajax({
					type: "POST",
					async : false,
					url: "http://erikwwj53.fiftythree.axc.nl/shout/api/getMessages.php",
					crossDomain: true,
					success: function( data ) {
						//console.log(data);
						console.log("SUCCES");
						Jdata = jQuery.parseJSON(data);
						return jData;
					},
					error: function(data){
						console.log(data);
					}			
				})
				return Jdata;
			};
			
			Jdata = getData();
			
			//console.log(Jdata.length);
			for(i = 0; i < Jdata.length; i++){
				//console.log(Jdata[i]['message']);
				this.addMessage(Jdata[i]['id'],Jdata[i]['userid'],Jdata[i]['tag'],Jdata[i]['message'],Jdata[i]['time'],Jdata[i]['like'],Jdata[i]['dislike'],Jdata[i]['location'])
			}
			
			
		},
		addMessage : function(id,username,tag,message,time,like,dislike,location){
			console.log("Add Message");
			var clsmessage = new cls_message();
			clsmessage.setMessage(id,username,tag,message,time,like,dislike,location);
			this.messages.push(clsmessage);
		},
		uploadMessage : function(message){
			console.log("Upload Message");
			var jdata;
			//console.log(JSON.stringify(message));
			jQuery.ajax({
				type: "POST",
				async : false,
				url: "http://erikwwj53.fiftythree.axc.nl/shout/api/addMessage.php",
				crossDomain: true,
				data: {
					data : JSON.stringify(message)
				},
				success: function( data ) {
					jdata = data;
					//this.drawMessage();
					console.log("SUCCES");
				},
				error: function(data){
					console.log(data);
				}			
				});
				
				var data2 = jdata.split('_');
				
				var clsmessage = new cls_message();
				clsmessage.setMessage('0',data2[0],'TEST',data2[1],'12:31','0','0','Uzbekistan');
				
				this.drawAddMessage(clsmessage);
		},
		giveLike : function(like,msgid){
			var id = this.messages.inArray2(msgid,"id");
			var message = new cls_message();
			
			message =  this.messages[id];
			if(like == "like"){
				message.giveLike();
			}else
			{
				message.giveDislike();
			}
		}		,
		drawAddMessage : function(message){
			console.log("Add message on screen");
			jQuery('<div class="row">\
				<div class="col-xs-12 col-md-12 messagebox">\
					<div class="row messagebox_header">\
						<div class="col-xs-3 col-md-3" align="left">'+ message.time +'</div>\
						<div class="col-xs-3 col-md-3" align="center":>user: '+ message.username +'</div>\
						<div class="col-xs-3 col-md-3" align="right">location: '+ message.location +' </div>\
						<div class="col-xs-3 col-md-3" align="right">Likes: ' + message.like + ' | Dislike: ' + message.dislike +' </div>\
					</div>	\
					<div class="row">\
						<div class="col-xs-12 col-md-12" align="left">' + message.message + '</br></br></br></div>\
					</div>\
					<div class="row messagebox_buttons">\
						<div class="buttonlikes col-xs-6 col-md-6 like" align="center" id="like_'+ message.id +'">Like</div>\
						<div class="buttonlikes col-xs-6 col-md-6 dislike" align="center" id="dislike_' + message.id + '">Dislike</div>\
					</div>\
				</div>\
			</div>' ).prependTo( '#content' ).hide().show('slow');;
		},
		drawAllMessages : function(){
			for(i = 0; i < this.messages.length; i++){
				this.drawAddMessage(this.messages[i]);
			}	
		}
	}

	