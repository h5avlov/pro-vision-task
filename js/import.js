$( document ).ready( function() {
	// Path to a general folder, where all script files to load are located
	const baseUrl = './js/'; 

	// A list of the script files to load
	const jsToImport = [
		'main-nav.js', 
		'offer-list.js', 
		'product-presentation-list.js', 
		'scroll-to-top.js', 
		'project.js' 

	]; 

	// For each of the script files a script element is created and appended to the document body
	jsToImport.forEach( function( name ) {
		const path = baseUrl + name; 
		const scriptElement = `<script src = ${ path }></script>`;
		$( 'body' ).append( scriptElement ); 

	} ); 
} );