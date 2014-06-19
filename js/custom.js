	function slideDiv(target){
		if ( $( "#"+target ).is( ":hidden" ) ) {
			$( "#"+target ).slideDown( "slow" );
		} 
		else {
			$( "#"+target ).slideUp( "fast" );
		}
		
		//if(prev != target && prev !=""){
		//	$( "#"+prev ).slideUp( "fast" );
		//}
		//prev = target;
		//$( "#LiveQuotiontionBox_1").slideDown( "slow", function() {});
		// Animation complete.
	}
	
	shoutMenu = {
		openMenu: function(gridid){
			$(gridid).animate({
				
			})
		}
	}
	
	
	