( function( button, scrollTarget, visibilityClass, delayToDisplay, displayDuration ) {

	// An object holding methods to display, hide, start and stop timer on scroll, mouse over, mouse out events
	const buttonControl = ( function( button, delayToDisplay, displayDuration, visibilityClass ) {
		// Timer identifier, used to clear timeout
		let timer; 
		// Holds the time when the scroll started
		let delayStartTime = 0; 
		// Holds button visibility state
		let isButtonVisible = false; 
		// Holds button mouse over state
		let isMouseOverButton = false; 

		// Displays the button
		function display() {
			button.addClass( visibilityClass ); 
			isButtonVisible = true; 

			startTimer(); 
		}

		// Hides the button
		function hide() {
			button.removeClass( visibilityClass );
			isButtonVisible = false;

			stopTimer(); 
		}

		// Finds how much time has elapsed since the scroll started
		function getTimeElapsed( currentTime ) {
			return currentTime - delayStartTime;
		}

		// Returns true when the delay to display the button has elapsed
		function isTimeToDisplay( currentTime ) {
			return getTimeElapsed( currentTime ) >= delayToDisplay; 
		}

		// Sets time, when scroll started, used to measure time elapsed
		function setDelayStart( value ) {
			delayStartTime = value;  
		}

		// Starts timer to hide the button after a given duration to display
		function startTimer() {
			timer = setTimeout( function() {
				hide(); 
			}, displayDuration ); 
		}

		// Clears timer
		function stopTimer() {
			clearTimeout( timer );
		}

		// Stops and starts the timer
		function resetTimer() {
			stopTimer(); 
			startTimer();
		}

		// Setter methods to change button state

		function setMouseOver() {
			isMouseOverButton = true; 
		}

		function setMouseOut() {
			isMouseOverButton = false; 
		}

		// Getter methods to read button state data

		function isVisible() {
			return isButtonVisible; 
		}

		function isMouseOver() {
			return isMouseOverButton; 
		}


		return {
			display, 
			hide, 
			setDelayStart, 
			isMouseOver, 
			setMouseOver, 
			setMouseOut, 
			isVisible, 
			isTimeToDisplay, 
			resetTimer, 
			stopTimer, 
			startTimer,
		};

	}( button, delayToDisplay, displayDuration, visibilityClass ) );

	// Button click scrolls page to top
	const clickBehaviour = ( function( scrollTarget ) {
		return function() {
			$.smoothScroll( {
				scrollTarget: scrollTarget
			} ); 
		};
	}( scrollTarget ) );

	// When page is scrolled, button is displayed and a timer to hide it after some time is started
	const scrollBehaviour = ( function( buttonControl ) {
		return function() {
			if ( buttonControl.isVisible() ) {
				buttonControl.resetTimer(); 
				return; 
			}

			buttonControl.display(); 

		}; 
	}( buttonControl ) );

	// When mouse is over the button, hiding timer is stopped
	const mouseOverBehaviour = ( function( buttonControl ) {
		return function() {
			buttonControl.setMouseOver(); 
			buttonControl.stopTimer();  
		};
	}( buttonControl ) ); 

	// When mouse leaves the button, hiding timer is started again
	const mouseOutBehaviour = ( function( buttonControl ) {
		return function() {
			buttonControl.setMouseOut(); 
			buttonControl.startTimer(); 
		}
	}( buttonControl ) );


	$( document ).on( 'scroll', scrollBehaviour );
	button.on( 'click', clickBehaviour );
	button.on( 'mouseenter', mouseOverBehaviour );
	button.on( 'mouseleave', mouseOutBehaviour );

}( $( '.scroll-to-top' ), '.header', 'visible', 1000, 1000 ) ); 
