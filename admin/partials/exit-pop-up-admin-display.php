<?php

/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       https://heikomamerow.de
 * @since      1.0.0
 *
 * @package    Exit_Pop_Up
 * @subpackage Exit_Pop_Up/admin/partials
 */
?>

<div class="wrap">

	<h1><?php echo esc_html( get_admin_page_title() ); ?></h1>

	<form method="post" name="exit_pop_up_options" action="options.php">

		<?php
		//Grab all options
		$options = get_option( $this->plugin_name );

		// Settings
		settings_fields( $this->plugin_name );
		do_settings_sections( $this->plugin_name );
		?>

		<fieldset>
			<h2><?php esc_html_e( 'Trigger settings', $this->plugin_name ); ?></h2>

			<label class="ex3p-label"
				   for="ex3p-probability"><?php _e( 'Probability', $this->plugin_name ); ?>
				:</label>
			<input id="ex3p-probability" class="ex3p-input ex3p-input-numbers
			small-text"
				   type="number"
				   name="<?php echo $this->plugin_name; ?>[probability]" min="0"
				   max="100" step="1" size="3"
				   value="<?php echo $options['probability'];
			       ?>"> <?php _e( 'in %', $this->plugin_name ); ?>
			<br>
			<label class="ex3p-label"
				   for="ex3p-delay"><?php _e( 'Delay', $this->plugin_name ); ?>
				:</label>
			<input id="ex3p-delay" class="ex3p-input ex3p-input-numbers
			small-text" type="number"
				   name="<?php echo $this->plugin_name; ?>[delay]" min="0"
				   max="999" step="1" size="3"
				   value="<?php echo $options['delay']; ?>"> <?php _e( 'in seconds', $this->plugin_name ); ?>
		</fieldset>

		<fieldset>
			<h2><?php _e( 'Content settings', $this->plugin_name ); ?></h2>

			<label class="ex3p-label ex3p-label-image"
				   for="<?php echo $this->plugin_name; ?>[image]"><?php _e( 'Image', $this->plugin_name ); ?>
				:</label>
			<div class="exp3-image-box">
				<?php
				$image = $options['image'];
				?>
				<img src="<?php echo $image ?>"
					 class="ex3p-image">
				<div>
					<input type="hidden"
						   name="<?php echo $this->plugin_name; ?>[image]"
						   id="<?php echo $this->plugin_name; ?>[image]"
						   value="<?php echo $image ?>">
					<button type="button" class="upload_image_button button">
						<?php _e( 'Upload image', $this->plugin_name ); ?>
					</button>
					<button type="button" class="remove_image_button button">
						<?php _e( 'Remove', $this->plugin_name ); ?>
					</button>
				</div>
			</div>
			<br>
			<label class="ex3p-label ex3p-label-textarea"
				   for="ex3p-txt"><?php _e( 'Text', $this->plugin_name ); ?>
				:</label>
			<textarea id="ex3p-txt" class="ex3p-input ex3p-textarea"
					  name="<?php echo $this->plugin_name; ?>[text]"><?php
				echo $options['text']; ?></textarea>
			<br>
			<label class="ex3p-label"
				   for="ex3p-btn-y"><?php _e( 'Yes Button', $this->plugin_name ); ?>
				:</label>
			<input id="ex3p-btn-y" class="ex3p-input" type="text"
				   name="<?php echo $this->plugin_name; ?>[btn-y]" value="<?php
			echo $options['btn-y']; ?>">
			<br>
			<label class="ex3p-label"
				   for="ex3p-btn-n"><?php _e( 'No Button', $this->plugin_name ); ?>
				:</label>
			<input id="ex3p-btn-n" class="ex3p-input" type="text"
				   name="<?php echo $this->plugin_name; ?>[btn-n]" value="<?php
			echo $options['btn-n']; ?>">
			<br>
			<label class="ex3p-label"
				   for="ex3p-close"><?php _e( 'Close', $this->plugin_name ); ?>
				:</label>
			<input id="ex3p-close" class="ex3p-input" type="text"
				   name="<?php echo $this->plugin_name; ?>[close]" value="<?php
			echo $options['close']; ?>">
			<br>
		</fieldset>
		<fieldset>
			<h2><?php _e( 'Mailserver settings', $this->plugin_name ); ?></h2>
			<label class="ex3p-label"
				   for="ex3p-action"><?php _e( 'Path to action script', $this->plugin_name ); ?>
				:</label>
			<input id="ex3p-action" class="ex3p-input" type="text"
				   name="<?php echo $this->plugin_name; ?>[action]"
				   value="<?php echo $options['action']; ?>"
				   placeholder="<?php _e( 'e.g. wp-content/plugins/...', $this->plugin_name ); ?>">
		</fieldset>

		<?php submit_button(); ?>
	</form>

	<h2><?php _e( 'Explanation', $this->plugin_name ); ?></h2>
	<p><?php _e( 'Exit pop-up pops up, if a user wants to leave the page. Leaving the page means: moving the mouse to the top of the browser window.', $this->plugin_name );
		?></p>
	<ul>
		<li>
			<span class="ex3p-bold"><?php _e( 'Probability', $this->plugin_name ); ?>:</span>
			<ul class="ex3p-ul-sec">
				<li><?php _e( 'The probability with which the pop-up should be used.', $this->plugin_name ); ?></li>
				<li><?php _e( 'Set a whole number between 0 - 100.', $this->plugin_name ); ?></li>
				<li><?php _e( 'Higher number means higher probability.', $this->plugin_name ); ?></li>
			</ul>
		</li>
		<li>
			<span class="ex3p-bold"><?php _e( 'Delay', $this->plugin_name ); ?>:</span>
			<ul class="ex3p-ul-sec">
				<li><?php _e( 'Time in seconds after pageload until the exit pop-up is ready.', $this->plugin_name ); ?></li>
				<li><?php _e( 'Set a whole number between 0 - 999.', $this->plugin_name ); ?></li>
				<li><?php _e( '0 means no delay.', $this->plugin_name ); ?></li>
			</ul>
		</li>
	</ul>

</div> <!-- .wrap -->