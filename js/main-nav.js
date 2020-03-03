( function( nav, classNames ) {
	const openButton = nav.find( '.open-nav-button' );
	const closeButton = nav.find( '.close-nav-button' );
	const openClassName = classNames[ 0 ];
	const closeClassName = classNames[ 1 ];

	nav.on( 'click', function( e ) {
		const target = $( e.target );
		if ( target.is( openButton ) ) {
			// On open navigation button click 'close' is removed 
			// and 'open' is added to navigation class names
			switchClassNames( nav, [ closeClassName, openClassName ] );
		} else if ( target.is( closeButton ) ) {
			// On close navigation button click 'open' is removed 
			// and 'close' is added to navigation class names
			switchClassNames( nav, [ openClassName, closeClassName ] );
		}
	} );

	// Removes the first of the two provided class names and adds the other
	function switchClassNames( section, [ prev, next ] ) {
		section.removeClass( prev );
		section.addClass( next );
	}

}( $( '.main-nav' ), [ 'open', 'close' ] ) );