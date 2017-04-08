<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://heikomamerow.de
 * @since      1.0.0
 *
 * @package    Exit_Pop_Up
 * @subpackage Exit_Pop_Up/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Exit_Pop_Up
 * @subpackage Exit_Pop_Up/admin
 * @author     Heiko Mamerow <mail@heikomamerow.de>
 */
class Exit_Pop_Up_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string $plugin_name The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string $version The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 *
	 * @param      string $plugin_name The name of this plugin.
	 * @param      string $version The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {
		$this->plugin_name = $plugin_name;
		$this->version     = $version;
	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {
		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/exit-pop-up-admin.css', array(), $this->version, 'all' );
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {
		wp_enqueue_media();
		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/exit-pop-up-admin.js', array( 'jquery' ), $this->version, true );
	}

	/**
	 * Register the administration menu for this plugin into the WordPress Dashboard menu.
	 *
	 * @since    1.0.0
	 */
	public function add_plugin_admin_menu() {
		add_options_page( 'Exit pop-up', 'Exit pop-up', 'manage_options', $this->plugin_name, array(
			$this,
			'display_plugin_setup_page'
		) );
	}

	/**
	 * Render the settings page for this plugin.
	 *
	 * @since    1.0.0
	 */
	public function display_plugin_setup_page() {
		include_once( 'partials/exit-pop-up-admin-display.php' );
	}

	/**
	 * Add settings action link to the plugins page.
	 *
	 * @since    1.0.0
	 */
	public function add_action_links( $links ) {
		/**
		 *  Documentation : https://codex.wordpress.org/Plugin_API/Filter_Reference/plugin_action_links_(plugin_file_name)
		 */
		$settings_link = array(
			'<a href="' . admin_url( 'options-general.php?page=' . $this->plugin_name ) . '">' . __( 'Settings', $this->plugin_name ) . '</a>',
		);

		return array_merge( $settings_link, $links );

	}

	/**
	 * Update options.
	 *
	 * @since    1.0.0
	 */
	public function options_update() {
		register_setting( $this->plugin_name, $this->plugin_name, array( $this ) );
	}

	/**
	 * Validation and sanitizing.
	 *
	 * @since    1.0.0
	 */
	//	public function validate( $input ) {
	// All checkboxes inputs
	//		$valid = array();

	//Cleanup
	//		$valid['probability'] = ( isset( $input['probability'] ) && ! empty(
	//			$input['probability'] ) ) ? 1 : 2;

	//		$valid['ex3pDelay'] = ( isset( $input['ex3pDelay'] ) && ! empty(
	//			$input['ex3pDelay'] ) ) ? 1 : 0;


	//		return $valid;
	//	}


	/**
	 * Add meta box for page edit.
	 *
	 * @since    1.0.0
	 */
	public function exit_pop_up_add_meta_box() {
		require_once 'partials/exit-pop-up-meta-box.php';
		$post_types = array( 'post', 'page' );
		add_meta_box( 'exit_pop_up_add_meta_box_id', 'Exit pop-up', 'exit_pop_up_meta_box_callback', $post_types, 'side' );
	}

	/**
	 * Save meta box content.
	 *
	 * @since    1.0.0
	 */
	function exit_pop_up_save_meta_box( $post_id ) {

		// Check if nonce is set.
		if ( ! isset( $_POST['exit_pop_up_nonce'] ) ) {
			return;
		}

		// Verify that the nonce is valid.
		if ( ! wp_verify_nonce( $_POST['exit_pop_up_nonce'], 'exit_pop_up' ) ) {
			return;
		}

		// Check the user's permissions.
		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			return;
		}

		// Make sure that it is set.
		if ( ! isset( $_POST['exit-pop-up-use'] ) ) {
			return;
		}

		// Sanitize user input.
		$snitized = sanitize_text_field( $_POST['exit-pop-up-use'] );

		// Store custom fields values.
		if ( isset( $_REQUEST['exit-pop-up-use'] ) ) {
			update_post_meta( $post_id, '_exit_pop_up_choice', $snitized );
		}
	}


	/**
	 * Quick edit meta box.
	 * This allows also bulk edit.
	 *
	 * @since    1.0.0
	 */

//	function exit_pop_up_quick_edit_meta_box() {
//
//	}

}


