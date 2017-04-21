/* eslint-disable no-undef,valid-jsdoc */
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

// Load options via object from wp_localize_script.
ex3pProbability = parseInt( ex3pObject.ex3pProbability, 10 );
ex3pPublicJs = ex3pObject.ex3pPublicJs;
ex3pPublicCss = ex3pObject.ex3pPublicCss;

/**
 * Calculate delay for pop-up loading.
 */
function ex3pDelayFn() {
	// Load option via object from wp_localize_script.
	ex3pDelay = parseInt( ex3pObject.ex3pDelay, 10 );

	// value to milliseconds
	ex3pDelay *= 1000;

	// Add more delay randomly
	min = 0;
	randomDelay = Math.floor( Math.random() * ( ex3pDelay + 1 ) ) + min;
	ex3pDelay += randomDelay;

	return ex3pDelay;
}

/**
 * Load the js file.
 *
 * @returns {string}
 */
function loadJs() {
	// Load js file
	fileref = document.createElement( 'script' );

	fileref.setAttribute( 'src', ex3pPublicJs );
	fileref.setAttribute( 'defer', 'defer' );

	return document.getElementsByTagName( 'body' )[ 0 ].appendChild( fileref );
}

/**
 * Load the basic css files.
 *
 * @returns {string}
 */
function loadCssBasic() {
	// Load basic css file
	fileref = document.createElement( 'link' );

	fileref.setAttribute( 'href', ex3pPublicCss );
	fileref.setAttribute( 'rel', 'stylesheet' );
	fileref.setAttribute( 'type', 'text/css' );
	fileref.setAttribute( 'media', 'screen' );

	return document.getElementsByTagName( 'head' )[ 0 ].appendChild( fileref );
}

/**
 * Load the css variant.
 *
 * @returns {string}
 */
function loadCssVariant() {
	// Shuffle and load a css variant file
	publicDirUrl = ex3pObject.publicDirUrl;
	scanDir = ex3pObject.public_scandir;
	randFile = scanDir[ Math.floor( Math.random() * scanDir.length ) ];

	fileref = document.createElement( 'link' );

	fileref.setAttribute( 'href', publicDirUrl + randFile );
	fileref.setAttribute( 'id', 'ex3p-css-variant' );
	fileref.setAttribute( 'rel', 'stylesheet' );
	fileref.setAttribute( 'type', 'text/css' );
	fileref.setAttribute( 'media', 'screen' );

	return document.getElementsByTagName( 'head' )[ 0 ].appendChild( fileref );
}

/**
 * Bundle all files functions.
 */
function loadFiles() {
	loadJs();
	loadCssBasic();
	loadCssVariant();
}

/**
 * Load all files with delay.
 */
// Check local store if not empty
if ( 'x' !== localStorage.getItem( 'exit-pop-up-' + window.location.hostname ) ) {
	// Get random number between 1 and 100.
	ex3pRand = Math.floor( Math.random() * 100 );

	// Load main script for pop-up
	if ( ex3pProbability >= ex3pRand ) {
		// Load files after amount of time.
		window.addEventListener( 'load', function () {
			setTimeout( loadFiles, ex3pDelayFn() );
		} );
	}
}


