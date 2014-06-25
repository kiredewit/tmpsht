var messages;

$( document ).ready(){
	messages = new cls_messages();	
}

function addMessage(userid,message){
	messages.uploadMessage(userid,message);
}