function addMessage(userid,message){
	console.log("AddMessage Start");
	messages.drawMessage();
	messages.uploadMessage(userid,message);
}