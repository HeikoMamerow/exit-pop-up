/**
 * Injcet form.
 */

function form() {
	var ex3pClose = ex3pObject.ex3pClose;

	// Create new nodes.
	var ex3pNodeSpan = document.createElement( 'span' );
	ex3pNodeSpan.setAttribute( 'id', 'ex3p-hide' );
	ex3pNodeSpan.setAttribute( 'class', 'hide' );

	var ex3pNodeDiv = document.createElement( 'div' );
	ex3pNodeDiv.setAttribute( 'id', 'ex3p' );
	ex3pNodeDiv.setAttribute( 'class', 'ex3p' );
	ex3pNodeDiv.setAttribute( 'title', ex3pClose );

	// Append new nodes.
	document.getElementsByTagName( 'body' )[ 0 ].appendChild( ex3pNodeSpan );
	document.getElementsByTagName( 'body' )[ 0 ].appendChild( ex3pNodeDiv );

	// Get form text and markup.
	document.getElementById( 'ex3p-hide' ).textContent = ex3pClose;

	// Multiline strings with + are slow. Better use `. But i can't for IE9. ;-(
	document.getElementById( 'ex3p' ).innerHTML = String( '<div id="ex3p-b" class="ex3p-b" title="">' +
		'<button id="ex3p-x" class="ex3p-x" type="button" title="' + ex3pClose + '">X</button>' +
		'<img alt="" src="' + ex3pObject.public_img + '" class="ex3p-l">' +
		'<div id="ex3p-txt" class="ex3p-txt">' + ex3pObject.ex3p_text + '</div>' +
		'<form id="ex3p-form" class="ex3p-form" novalidate action="' + ex3pObject.public_url ) + ex3pObject.ex3p_action + '" method="post">' +
		'<label for="ex3p-in" class="ex3p-lbl">' + ex3pObject.public_email + '</label>' +
		'<input id="ex3p-in" class="ex3p-in" type="email" name="email" value="' + ex3pObject.public_email + '">' +
		'<input type="hidden" name="sourcepage" value="' + window.location.href + '">' +
		'<input type="hidden" name="sourcepage-title" value="' + document.title + '">' +
		'<input type="hidden" name="country" value="country" id="ex3p-country">' +
		'<input type="hidden" name="delay" value="delay" id="ex3p-delay">' +
		'<input type="hidden" name="css-variant" value="css-variant" id="ex3p-css-variant-input">' +
		'<input type="hidden" name="browser" value="browser" id="ex3p-browser">' +
		'<input type="hidden" name="status" value="" id="ex3p-status">' +
		'<button type="button" name="action" value="submit" id="ex3p-yes" class="ex3p-button ex3p-yes">' + ex3pObject.ex3p_btn_y + '</button>' +
		'<button type="button" name="action" value="cancel" id="ex3p-no" class="ex3p-button ex3p-no">' + ex3pObject.ex3p_btn_n + '</button>' +
		'</form>' +
		'</div>';
}
form();

/**
 * Clear placeholder text if focus.
 * Show placeholder text if blur and nothing was written.
 */
var ex3pIn = document.getElementById( 'ex3p-in' );

ex3pIn.addEventListener( 'focus', function () {
	if ( ex3pIn.value === ex3pIn.previousElementSibling.innerHTML ) {
		ex3pIn.value = '';
	}
} );

ex3pIn.addEventListener( 'blur', function () {
	if ( '' === ex3pIn.value ) {
		ex3pIn.value = ex3pIn.previousElementSibling.innerHTML;
	}
} );

/**
 * Different close Pop-up actions
 *
 */
var ex3p = document.getElementById( 'ex3p' );
var ex3pX = document.getElementById( 'ex3p-x' );
var ex3pYes = document.getElementById( 'ex3p-yes' );
var ex3pNo = document.getElementById( 'ex3p-no' );

/**
 * Hide input field and say Thank You after submit
 */
function ex3pThanks() {
	ex3pIn.style.display = 'none';
	ex3pYes.style.display = 'none';
	ex3pNo.style.display = 'none';
	document.getElementById( 'ex3p-txt' ).innerHTML = ex3pObject.ex3p_text_submit;
	document.getElementById( 'ex3p-status' ).value = 'submit';

	setTimeout( function () {
		document.getElementById( 'ex3p-form' ).submit();
	}, 3000 );
}
ex3pYes.addEventListener( 'touchstart', ex3pThanks );
ex3pYes.addEventListener( 'click', ex3pThanks );

/**
 * Get values when clicked.
 */
function ex3pClick() {
	// Get date and time.
	document.getElementById( 'ex3p-delay' ).value = ex3pDelayFn() / 1000 + ' sec.';

	// Get css variant.
	var cssVariantHref = document.getElementById( 'ex3p-css-variant' ).getAttribute( 'href' );
	var cssVariant = cssVariantHref.substring( cssVariantHref.lastIndexOf( '/' ) + 1, cssVariantHref.lastIndexOf( '.css' ) );
	document.getElementById( 'ex3p-css-variant-input' ).value = cssVariant;

	// Get brrowser info: user-agent.
	document.getElementById( 'ex3p-browser' ).value = navigator.userAgent;
}
ex3pYes.addEventListener( 'touchstart', ex3pClick );
ex3pYes.addEventListener( 'click', ex3pClick );
ex3pNo.addEventListener( 'touchstart', ex3pClick );
ex3pNo.addEventListener( 'click', ex3pClick );
ex3pX.addEventListener( 'touchstart', ex3pClick );
ex3pX.addEventListener( 'click', ex3pClick );
ex3p.addEventListener( 'touchstart', ex3pClick );
ex3p.addEventListener( 'click', ex3pClick );

/**
 * Get special values when canceling.
 *
 * Giving a fake e-mail because form check.
 */
function ex3pCancel() {
	ex3p.style.display = 'none';
	ex3pIn.value = 'just@fa.ke';
	document.getElementById( 'ex3p-form' ).submit();
}

/**
 * Submit form (with fake email) when click on cancel button.
 */
function buttonNo() {
	document.getElementById( 'ex3p-status' ).value = 'cancel';
	ex3pCancel();
}
ex3pNo.addEventListener( 'touchstart', buttonNo );
ex3pNo.addEventListener( 'click', buttonNo );

/**
 * Submit form (with fake email) when click on "X".
 */
function submitX() {
	document.getElementById( 'ex3p-status' ).value = 'cancel-x';
	ex3pCancel();
}
ex3pX.addEventListener( 'touchstart', submitX );
ex3pX.addEventListener( 'click', submitX );

/**
 * Submit form (with fake email) when click out of the box.
 */
function submitOutOfBox() {
	document.getElementById( 'ex3p-status' ).value = 'cancel-out-of-box';
	ex3pCancel();
}

/**
 * Close pop-up.
 */
function triggerClose( e ) {
	var trid = e.target.id;

	if ( 'ex3p' === trid ) {
		submitOutOfBox();
	}
}
ex3p.addEventListener( 'touchstart', triggerClose );
ex3p.addEventListener( 'click', triggerClose );

/**
 * Check external links.
 */
// var ex3pExtUrl = document.getElementsByTagName('a').getAttribute('href');
//
// function extractHostname(url) {
// 	var hostname;
// 	//find & remove protocol (http, ftp, etc.) and get the hostname
// 	if (url.indexOf("://") > -1) {
// 		hostname = url.split('/')[2];
// 	}
// 	else {
// 		hostname = url.split('/')[0];
// 	}
//
// 	//find & remove port number
// 	hostname = hostname.split(':')[0];
//
// 	return hostname;
// }
//
// function clickLink() {
// 	console.log(extractHostname(ex3pExtUrl));
// }
// ex3p.addEventListener('click', clickLink);
//
//
//
// if (extractHostname(ex3pExtUrl) === window.location.hostname ) {
//
// }

/**
 * Fire Pop-up.
 */
function popupReady() {
	// Makes sure, pop up fires only once.
	var onlyOnce = true;

	// Get the vertical coordinate.
	var clientY = '100';

	document.getElementsByTagName( 'header' )[ 0 ].addEventListener( 'mousemove', function ( event ) {
		// Get vertical position of mouse in viewport.
		clientY = event.clientY;

		// If Mouse goes over top, fire pop-up.
		if ( 50 > clientY ) {
			document.getElementsByTagName( 'body' )[ 0 ].addEventListener( 'mouseleave', function () {
				// Makes sure, pop up fires only once.
				if ( true === onlyOnce ) {
					onlyOnce = false;
					ex3p.style.display = 'block';

					// Set cookie.
					localStorage.setItem( 'exit-pop-up-' + window.location.hostname, 'x' );
				}
			} );
		}
	} );
}
popupReady();
