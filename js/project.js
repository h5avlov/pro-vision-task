$( document ).ready( function() {
	// Initializes main slider
	$( '.offer-list .slides' ).bxSlider( {
		pager: false, 
		// auto: true 
	} ); 

	// Copies auto generated slider controls to text content in all slides
	$( '.offer-list .text-content' ).append( $( '.offer-list .bx-controls-direction' ) ); 

	// Initializes sliders over product presentation lists 
	const productPresentationColumnCount = defineColumnCount( $( window ).innerWidth() ); 
	$( '.product-presentation-list' ).bxSlider( {
		minSlides: productPresentationColumnCount,
		maxSlides: productPresentationColumnCount, 
		moveSlides: 2, 
		slideWidth: 800, 
		// slideMargin: 8, 
		shrinkSlide: true, 
		pager: false, 
		infiniteLoop: false 
	} ); 

} );

// Defines the number of product presentations in product presentation lists, based on screen width
function defineColumnCount( viewportWidth ) {
	let productPresentationColumns = 4; 
	if ( viewportWidth < 960 && viewportWidth >= 640 ) {
		productPresentationColumns = 3;
	} else if ( viewportWidth < 640 && viewportWidth >= 480 ) {
		productPresentationColumns = 2; 
	} else if ( viewportWidth < 480 ) {
		productPresentationColumns = 1;
	}

	return productPresentationColumns;
}