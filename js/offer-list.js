( function() {
	// Initializes main slider
	$( '.offer-list .slides' ).bxSlider( {
		pager: false, 
		// auto: true 
	} ); 

	// Copies auto generated slider controls to text content wrapper in all slides
	$( '.offer-list .text-content' )
		.append( $( '.offer-list .bx-controls-direction' ) ); 

}() );