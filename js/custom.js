	function slideDiv(target){
		if ( jQuery( "#"+target ).is( ":hidden" ) ) {
			jQuery( "#"+target ).slideDown( "fast" );
		} 
		else {
			jQuery( "#"+target ).slideUp( "fast" );
		}
		
		//if(prev != target && prev !=""){
		//	jQuery( "#"+prev ).slideUp( "fast" );
		//}
		//prev = target;
		//jQuery( "#LiveQuotiontionBox_1").slideDown( "slow", function() {});
		// Animation complete.
	}
	
	shoutMenu = {
		openMenu: function(gridid){
			jQuery(gridid).animate({
				
			})
		}
	}

	