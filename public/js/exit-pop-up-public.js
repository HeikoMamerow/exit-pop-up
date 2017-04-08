/**
 * Injcet form.
 */
function form() {
	var ex3pClose = ex3pObject.ex3pClose;

	var ttt = ex3pObject.public_scandir;
	console.log( 'ttt: '.ttt );

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

	document.getElementById( 'ex3p' ).innerHTML = `<div id="ex3p-b" class="ex3p-b" title="">
		<button id="ex3p-x" class="ex3p-x" type="button" title="${ex3pClose}">X</button>
		<img alt="" src="${ex3pObject.public_img}" class="ex3p-l">
		<div class="ex3p-txt">${ex3pObject.ex3p_text}</div>
		<form id="ex3p-form" class="ex3p-form"	action="${ex3pObject.public_url}${ex3pObject.ex3p_action}" method="post">
		<label for="ex3p-in" class="ex3p-lbl">${ex3pObject.public_email}</label>
		<input id="ex3p-in" class="ex3p-in" type="email" name="email" required value="${ex3pObject.public_email}">
		<input type="hidden" name="sourcepage" value="${window.location.href}">
		<input type="hidden" name="sourcepage-title" value="${document.title}">
		<input type="hidden" name="country" value="country" id="ex3p-country">
		<input type="hidden" name="ref" value="ref" id="ex3p-ref">
		<button type="submit" name="action" value="1" class="ex3p-button ex3p-yes">${ex3pObject.ex3p_btn_y}</button>
		<button type="button" id="ex3p-no" class="ex3p-button ex3p-no">${ex3pObject.ex3p_btn_n}</button>
		</form>
		</div>`;
}
form();

/**
 * Close Pop-up: set it with css display:none;
 * If clicking on "X" or outside from the box.
 */
var ex3p = document.getElementById( 'ex3p' );
var ex3pX = document.getElementById( 'ex3p-x' );
var ex3pNo = document.getElementById( 'ex3p-no' );

/**
 * Faster action without delay.
 * @param {string} e Is for sometheing.
 */
function triggerClose( e ) {
	var trid = e.target.id;

	if ( 'ex3p' === trid || ex3pX.contains( e.target ) || ex3pNo.contains( e.target ) ) {
		ex3p.style.display = 'none';
	}
}

ex3p.addEventListener( 'touchstart', triggerClose );
ex3p.addEventListener( 'click', triggerClose );

/**
 * Clear placeholder text if focus.
 * Show placeholder text if blur and nothing was written.
 */
var ex3pIn = document.getElementById( 'ex3p-in' );

ex3pIn.addEventListener( 'focus', () => {
	if ( ex3pIn.value === ex3pIn.previousElementSibling.innerHTML ) {
		ex3pIn.value = '';
	}
} );

ex3pIn.addEventListener( 'blur', () => {
	if ( '' === ex3pIn.value ) {
		ex3pIn.value = ex3pIn.previousElementSibling.innerHTML;
	}
} );

/**
 * Get Date for ref value.
 */
document.getElementById( 'ex3p-ref' ).value = new Date();

/**
 * Fire Pop-up.
 */
function popupReady() {
	// Makes sure, pop up fires only once.
	var onlyOnce = true;

	// Get the vertical coordinate.
	var clientY = '100';

	document.getElementsByTagName( 'header' )[ 0 ].addEventListener( 'mousemove', ( event ) => {
		// Get vertical position of mouse in viewport.
		clientY = event.clientY;

		// If Mouse goes over top, fire pop-up.
		if ( 50 > clientY ) {
			document.getElementsByTagName( 'body' )[ 0 ].addEventListener( 'mouseleave', () => {
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
