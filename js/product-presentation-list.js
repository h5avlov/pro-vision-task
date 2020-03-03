( function() {
	// Initializes sliders over product presentation lists, 
	// taking into account their number of columns specified in CSS
	const productPresentationColumnCount = parseInt( 
		getComputedStyle( document.querySelector( '.product-presentation-list' ) )
			.getPropertyValue( '--product-presentation-column-count' ) 
	);

	$( '.product-presentation-list' ).bxSlider( {
		minSlides: productPresentationColumnCount,
		maxSlides: productPresentationColumnCount, 
		moveSlides: 2, 
		slideWidth: 400, 
		shrinkSlide: true, 
		pager: false, 
		infiniteLoop: false 
	} );
}() );