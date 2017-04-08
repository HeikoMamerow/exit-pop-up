<?php
/**
 * The output for edit page.
 *
 * @link       https://heikomamerow.de
 * @since      1.0.0
 *
 * @package    Exit_Pop_Up
 * @subpackage Exit_Pop_Up/admin
 */

/**
 * Add content to meta box.
 *
 * @since    1.0.0
 */
function exit_pop_up_meta_box_callback( $post ) {

	wp_nonce_field( 'exit_pop_up', 'exit_pop_up_nonce' );

	// Retrieve radio current value.
	$current_choice = get_post_meta( $post->ID, '_exit_pop_up_choice', true );

	?>
	<p><?php esc_attr_e( 'Apply exit pop-up for this page?', 'exit-pop-up' ); ?></p>
	<input id="exit-pop-up-use-yes" type="radio" name="exit-pop-up-use"
		   value="yes" <?php checked( $current_choice, 'yes' ); ?>>
	<label class="exit-pop-up-use-yes-label" for="exit-pop-up-use-yes"><?php esc_attr_e( 'yes', 'exit-pop-up' ); ?></label>
	<input id="exit-pop-up-use-no" type="radio" name="exit-pop-up-use"
		   value="no" <?php checked( $current_choice, 'no' ); ?>><label
			for="exit-pop-up-use-no"><?php esc_attr_e( 'no', 'exit-pop-up' ); ?></label>
	<?php
}

