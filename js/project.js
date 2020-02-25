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

	// Gives the open navigation button its functionality, 
	// based on CSS classes, marking the navigation state - open / close
	registerNavOpenOnClick( $( '.main-nav' ), [ 'open', 'close' ] );

} );

// Adds click event listener to the navigation opening button
function registerNavOpenOnClick( nav, classNames ) {
	const button = nav.find( '.open-nav-button' );

	// Each click on the button opens and closes navigation in that order
	button.on( 'click', function() {
		toggleSection( nav, classNames );
	} );
}

// Removes one of the two provided class names and adds the other
function toggleSection( section, classNamesToToggle ) {
	for ( let i = 0; i < classNamesToToggle.length; i++ ) {
		const current = classNamesToToggle[ i ];
		const next = classNamesToToggle[ ( i + 1 ) % classNamesToToggle.length ]; 
		if ( section.hasClass( current ) ) {
			section.removeClass( current );
			section.addClass( next );
			return;
		}
	}
	section.addClass( classNamesToToggle[ 0 ] ); 
}

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