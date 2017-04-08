( function ( $ ) {
	'use strict';

	// Credits for upload and remove button to:
	// http://mycyberuniverse.com/integration-wordpress-media-uploader-plugin-options-page.html

	// Upload button
	$( '.upload_image_button' ).click( function () {
		var send_attachment_bkp = wp.media.editor.send.attachment;
		var button = $( this );
		wp.media.editor.send.attachment = function ( props, attachment ) {
			$( button ).parent().prev().attr( 'src', attachment.url );

			// $(button).parent().prev().attr('class', 'ex3p-display');
			$( button ).prev().val( attachment.url );
			wp.media.editor.send.attachment = send_attachment_bkp;
		};
		wp.media.editor.open( button );

		return false;
	} );

	// Remove button
	$( '.remove_image_button' ).click( function () {
		var src = $( this ).parent().prev().attr( 'data-src' );
		var button = $( this );
		$( button ).parent().prev().attr( 'class', 'ex3p-image-hide' );
		$( this ).parent().prev().attr( 'src', src );
		$( this ).prev().prev().val( '' );

		return false;
	} );
}( jQuery ) );
