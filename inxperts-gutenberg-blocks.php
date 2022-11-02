<?php
/**
 * Plugin Name:       InXperts Gutenberg Blocks
 * Description:       A gutenberg blocks to use for pages/posts design.
 * Requires at least: 5.9
 * Requires PHP:      5.6
 * Version:           1.0.0
 * Author:            InXperts
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       inxperts-gutenberg-blocks
 *
 * @package           InXpertsGutenbergBlocks
 */


define( 'IGB__FILE__', __FILE__ );
define( 'IGB_URL', trailingslashit( plugin_dir_url( __FILE__ ) ) );
define( 'IGB_DIR', trailingslashit( plugin_dir_path( __FILE__ ) ) );

define( 'IGB_ROOT_DIR', trailingslashit( plugin_dir_path( __FILE__ ) ) );

/**
 * Blocks Initializer.
 */

require_once plugin_dir_path( __FILE__ ) . 'src/init.php';