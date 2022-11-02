<?php 
/**
 * Registers the block using the metadata loaded from the `block.json` file.
 *
 * @since 0.1.0
 */
function create_inxperts_navigation_block_block_init() {
	register_block_type(
		__DIR__,
		[
			'render_callback' => 'render_inxperts_navigation',
		]
	);
}
add_action( 'init', 'create_inxperts_navigation_block_block_init' );

/**
 * Block render callback.
 *
 * @since 0.1.0
 * @param array $attrs Block attributes.
 *
 * @return string
 */
function render_inxperts_navigation( $attrs ) {

	$attrs      = wp_parse_args(
		$attrs,
		[
			'className' => '',
			'anchor'    => '',
			'menu'      => 0,
		]
	);

	$menu_wrap = '<div class="hamburger" id="mobile_menu">';
		$menu_wrap .= '<div class="igb_menu_icon"><span class="line"></span><span class="line"></span><span class="line"></span></div>';
	$menu_wrap .= '</div>';
	$menu_wrap .= '<ul id="%1$s" class="%2$s">%3$s</ul>';

	$menu_attrs = [
		'echo'            => false,
		'container_class' => 'wp-classic-menu-block ' . $attrs['className'],
		'container_id'    => $attrs['anchor'],
		'menu'            => $attrs['menu'],
		'items_wrap' 	  => $menu_wrap,
	];

	/**
	 * Filters menu attributes.
	 *
	 * @since 0.1.0
	 *
	 * @param array $menu_attrs Menu attributes.
	 * @param array $attrs Block attributes.
	 */
	$menu_attrs = apply_filters( 'classic_menu_block_attributes', $menu_attrs, $attrs );

	if($attrs['menu'] != 0){
		return (string) wp_nav_menu( $menu_attrs );
	}

	return '<div>Select a Menu to render.</div>';
	
}