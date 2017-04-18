<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://heikomamerow.de
 * @since      1.0.0
 *
 * @package    Exit_Pop_Up
 * @subpackage Exit_Pop_Up/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Exit_Pop_Up
 * @subpackage Exit_Pop_Up/public
 * @author     Heiko Mamerow <mail@heikomamerow.de>
 */
class Exit_Pop_Up_Public {

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
	 * @param      string $plugin_name The name of the plugin.
	 * @param      string $version The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version     = $version;
	}

	/**
	 * Enqueued the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * Check if page should use exit pop-up.
		 * Also if not checked (default).
		 * Also check if user logged in.
		 */

		$current_choice = get_post_meta( get_the_ID(), '_exit_pop_up_choice', true );
		if ( ( ( 'yes' === $current_choice ) ) && ( ! is_user_logged_in() ) ) {
			wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/exit-pop-up-loader.js', array(), $this->version, true );
		}
	}

	/**
	 * Localize the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function localize_script() {
		//Grab all options
		$options = get_option( $this->plugin_name );

		$public_dir_path       = plugin_dir_path( __FILE__ ) . 'css/variants';
		$public_dir_url        = plugin_dir_url( __FILE__ ) . 'css/variants/';
		$public_scandir        = scandir( $public_dir_path );
		$public_scandir_sliced = array_slice( $public_scandir, 2 );

		$public_url   = esc_url( home_url( '/', 'https' ) );
		$public_js    = plugin_dir_url( __FILE__ ) . 'js/exit-pop-up-public.js';
		$public_css   = plugin_dir_url( __FILE__ ) . 'css/exit-pop-up-public.css';
		$public_email = __( 'E-Mail', 'exit-pop-up' );

		$localize_array = array(
			'ex3pProbability'  => $options['probability'],
			'ex3pDelay'        => $options['delay'],
			'ex3pPublicJs'     => $public_js,
			'ex3pPublicCss'    => $public_css,
			'ex3pClose'        => $options['close'],
			'ex3p_text'        => $options['text'],
			'ex3p_text_submit' => $options['text-submit'],
			'public_url'       => $public_url,
			'ex3p_action'      => $options['action'],
			'public_email'     => $public_email,
			'ex3p_btn_y'       => $options['btn-y'],
			'ex3p_btn_n'       => $options['btn-n'],
			'public_img'       => $options['image'],
			'public_scandir'   => $public_scandir_sliced,
			'publicDirUrl'     => $public_dir_url,
		);
		wp_localize_script( $this->plugin_name, 'ex3pObject', $localize_array );
	}
}
