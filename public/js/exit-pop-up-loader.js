/**
 * Loader script
 *
 * Checks browser local storage.
 *
 * Fires pop-up script and css if no value "x" in local storage.
 */

// Variables
var ex3pProbability;
var ex3pPublicJs;
var ex3pPublicCss;
var ex3pRand;
var fileref;
var ex3pDelay;
var min;
var randomDelay;
var scanDir;
var randFile;
var publicDirUrl;

// Check local store if not empty
if ( 'xxxxxxxxxx' !== localStorage.getItem( 'exit-pop-up-' + window.location.hostname ) ) {
	// Load options via object from wp_localize_script.
	ex3pProbability = parseInt( ex3pObject.ex3pProbability, 10 );
	ex3pPublicJs = ex3pObject.ex3pPublicJs;
	ex3pPublicCss = ex3pObject.ex3pPublicCss;

	// Get random number between 1 and 100.
	ex3pRand = Math.floor( Math.random() * 100 );

	/**
	 * Load the js and css files.
	 */
	function loadFiles() {
		// Load js file
		fileref = document.createElement( 'script' );

		fileref.setAttribute( 'src', ex3pPublicJs );
		fileref.setAttribute( 'defer', 'defer' );

		document.getElementsByTagName( 'head' )[ 0 ].appendChild( fileref );

		// Load basic css file
		fileref = document.createElement( 'link' );

		fileref.setAttribute( 'href', ex3pPublicCss );
		fileref.setAttribute( 'rel', 'stylesheet' );
		fileref.setAttribute( 'type', 'text/css' );
		fileref.setAttribute( 'media', 'screen' );

		document.getElementsByTagName( 'head' )[ 0 ].appendChild( fileref );

		// Shuffle a css variant file and load
		publicDirUrl = ex3pObject.publicDirUrl;
		scanDir = ex3pObject.public_scandir;
		randFile = scanDir[ Math.floor( Math.random() * scanDir.length ) ];

		fileref = document.createElement( 'link' );

		fileref.setAttribute( 'href', publicDirUrl + randFile );
		fileref.setAttribute( 'id', 'ex3p-css-variant' );
		fileref.setAttribute( 'rel', 'stylesheet' );
		fileref.setAttribute( 'type', 'text/css' );
		fileref.setAttribute( 'media', 'screen' );

		document.getElementsByTagName( 'head' )[ 0 ].appendChild( fileref );
	}

	// Load main script for pop-up
	if ( ex3pProbability >= ex3pRand ) {
		// Load option via object from wp_localize_script.
		ex3pDelay = parseInt( ex3pObject.ex3pDelay, 10 );

		// value to milliseconds
		ex3pDelay *= 1000;

		// Add more delay randomly
		min = 0;
		randomDelay = Math.floor( Math.random() * ( ex3pDelay + 1 ) ) + min;
		ex3pDelay += randomDelay;

		// Load files after amount of time.
		window.addEventListener( 'load', function () {
			setTimeout( loadFiles, ex3pDelay );
		} );
	}
}
