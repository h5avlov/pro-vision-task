$( document ).ready( function() {
	// Initializes main slider
	$( '.offer-list .slides' ).bxSlider( {
		pager: false, 
		// auto: true 
	} ); 

	// Copies auto generated slider controls to text content in all slides
	$( '.offer-list .text-content' ).append( $( '.offer-list .bx-controls-direction' ) ); 

	// Initializes sliders over product presentation lists, 
	// taking into account their number of columns, specified in CSS
	const productPresentationColumnCount = parseInt( 
		getComputedStyle( document.querySelector( '.product-presentation-list' ) )
			.getPropertyValue( '--product-presentation-column-count' ) 
	);

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
	const openButton = nav.find( '.open-nav-button' );
	const closeButton = nav.find( '.close-nav-button' );
	const openClassName = classNames[ 0 ];
	const closeClassName = classNames[ 1 ];

	// Each click on the button opens and closes navigation in that order
	nav.on( 'click', function( e ) {
		const target = $( e.target );
		if ( target.is( openButton ) ) {
			switchClassNames( nav, [ closeClassName, openClassName ] );
		} else if ( target.is( closeButton ) ) {
			switchClassNames( nav, [ openClassName, closeClassName ] );
		}
	} );
}

// Removes one of the two provided class names and adds the other
function switchClassNames( section, classNamesToSwitch ) {
	const prev = classNamesToSwitch[ 0 ];
	const next = classNamesToSwitch[ 1 ];

	section.removeClass( prev );
	section.addClass( next );
}
