<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package InXpertGutenbergBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


/**
 *
 * Server side registration.
 *
 * @since 1.0.0
 * @version 1.0.0
 *
 */

require_once IGB_DIR . 'src/navigation/register.php';
require_once IGB_DIR . 'src/pagemeta/register.php';

add_action( 'enqueue_block_assets', 'inxperts_gutenberg_blocks_assets' );

function inxperts_gutenberg_blocks_assets(){

		if( ! is_admin() ){
			wp_enqueue_script(
				'inxperts-gutenberg-blocks-glide',
				IGB_URL . './assets/js/glide.js'
			);

			wp_enqueue_script(
				'inxperts-gutenberg-blocks-editor',
				IGB_URL . 'src/editor.js', 
			);

			wp_localize_script('inxperts-gutenberg-blocks-editor', 'WPURLS', array('siteurl' => get_option('siteurl')));
		}
		wp_enqueue_script( 'igb-google', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBvAWzBtGKNnk9Tgc1GYHjwLGzJTCmjVTA&v=weekly', '', 1.0, false);

}

function IGB_enqueue_blocks_scripts() {
	
    $asset_file = require_once plugin_dir_path( __DIR__ ) . 'build/index.asset.php';
	
    wp_enqueue_script( 'igb-main', IGB_URL . 'build/index.js', $asset_file['dependencies'], 1.0, false);
	
	wp_enqueue_style( 'igb-style-index', IGB_URL . 'build/style-index.css', is_admin() ? array( 'wp-editor' ) : null);

	if( is_admin() ){
		wp_enqueue_style( 'igb-style', IGB_URL . 'build/index.css', array( 'wp-edit-blocks' ));
	}
}

add_action( 'init', 'IGB_enqueue_blocks_scripts');