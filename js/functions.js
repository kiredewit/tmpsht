function addMessage(message){
	console.log("AddMessage Start");
	messages.uploadMessage(message);
}

var utils = {};
// Could create a utility function to do this
utils.inArray = function(searchFor, property) {
    var retVal = -1;
    var self = this;
    for(var index=0; index < self.length; index++){
        var item = self[index];
        if (item.hasOwnProperty(property)) {
            if (item[property].toLowerCase() === searchFor.toLowerCase()) {
                retVal = index;
                return retVal;
            }
        }
    };
    return retVal;
};
Array.prototype.inArray2 = utils.inArray;