<?php

/**
 * @link              https://heikomamerow.de
 * @since             1.0.0
 * @package           Exit_Pop_Up
 *
 * @wordpress-plugin
 * Plugin Name:       Exit Pop-up
 * Plugin URI:        https://heikomamerow.de
 * Description:       Display modal window on top of the page before user leave.
 * Version:           1.0.0
 * Author:            Heiko Mamerow
 * Author URI:        https://heikomamerow.de
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       exit-pop-up
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-exit-pop-up-activator.php
 */
function activate_exit_pop_up() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-exit-pop-up-activator.php';
	Exit_Pop_Up_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-exit-pop-up-deactivator.php
 */
function deactivate_exit_pop_up() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-exit-pop-up-deactivator.php';
	Exit_Pop_Up_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_exit_pop_up' );
register_deactivation_hook( __FILE__, 'deactivate_exit_pop_up' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-exit-pop-up.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_exit_pop_up() {

	$plugin = new Exit_Pop_Up();
	$plugin->run();

}

run_exit_pop_up();


