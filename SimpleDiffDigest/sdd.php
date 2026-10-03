<?php

/**
 * Plugin Name:       SimpleDiff Digest
 * Description:       Revisions tracker enhancement
 * Version:           0.5
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Matt Frye
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       sdd
 * Domain Path:       /languages
 */

register_activation_hook( __FILE__, 'sdd_activate' );
register_deactivation_hook( __FILE__, 'sdd_deactivate' );
register_uninstall_hook(__FILE__, 'sdd_uninstall');



function sdd_activate() {
	return true;
}

function sdd_deactivate() {
	return true;
}

function sdd_uninstall() {
	return true;
}

add_action('admin_enqueue_scripts', 'sdd_footer_scripts');
add_action('admin_enqueue_scripts', 'sdd_styles');
function sdd_footer_scripts() {
	wp_enqueue_script('sdd-scripts', plugin_dir_url(__FILE__) . 'sdd-digest.js', array(), time(), true);
}
function sdd_styles() {	
	wp_enqueue_style('sdd-digest-style',  plugin_dir_url(__FILE__) . 'sdd-style.css', array(), time(), 'all');  
}
