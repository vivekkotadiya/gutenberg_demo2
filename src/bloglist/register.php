<?php 
/**
 * Registers the block using the metadata loaded from the `block.json` file.
 *
 * @since 0.1.0
 */
function create_gutenbutg_bloglist_block_init() {
	register_block_type(
		__DIR__,
		[
			'render_callback' => 'render_inxperts_blogs_list',
		]
	);
}
add_action( 'init', 'create_gutenbutg_bloglist_block_init' );

/**
 * Block render callback.
 *
 * @since 0.1.0
 * @param array $attrs Block attributes.
 *
 * @return string
 */
function render_inxperts_blogs_list( $attrs ) {

	$attrs      = wp_parse_args(
		$attrs,
		[
			'postType'      => 'post',
		]
	);

    $postType = $attrs['postType'];

        $query_args = array(
            'post_type' 		=> $postType,
            'posts_per_page' 	=> 3,
            'post_status' => 'publish'
		);

        $the_query  = new WP_Query( $query_args );

        $html = '';
     
        if ( $the_query->have_posts() ) : 
            $html .= '<div class="blog__row__wrapper">';
                $html .= '<div class="layout__row">';
                    while ( $the_query->have_posts() ) : $the_query->the_post(); 
                    
                    $html .= '<div class="blog__item">'; 
                        $html .= '<a href="'.get_the_permalink().'" class="blog__image">'.get_the_post_thumbnail(get_the_ID()).'</a>';
                        $html .= '<div class="blog__content">'; 
                            $html .=   '<h2 class="blog__title"><a href="'.get_the_permalink().'">'.get_the_title().'</a></h2>';
                            $html .=   '<span class="blog__date"><svg width="15px" height="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#808080"><path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM64 304C64 312.8 71.16 320 80 320H112C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304zM192 304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304zM336 256C327.2 256 320 263.2 320 272V304C320 312.8 327.2 320 336 320H368C376.8 320 384 312.8 384 304V272C384 263.2 376.8 256 368 256H336zM64 432C64 440.8 71.16 448 80 448H112C120.8 448 128 440.8 128 432V400C128 391.2 120.8 384 112 384H80C71.16 384 64 391.2 64 400V432zM208 384C199.2 384 192 391.2 192 400V432C192 440.8 199.2 448 208 448H240C248.8 448 256 440.8 256 432V400C256 391.2 248.8 384 240 384H208zM320 432C320 440.8 327.2 448 336 448H368C376.8 448 384 440.8 384 432V400C384 391.2 376.8 384 368 384H336C327.2 384 320 391.2 320 400V432z"/></svg><span class="__date">'.get_the_date().'</span></span>';
                            $html .=   '<div class="blog__description">'.get_the_excerpt().'</div>';
                            $html .=   '<a class="btn btn__primary" href="'.get_the_permalink().'">Mehr erfahren</a>';
                            
                        $html .= '</div>';
                    $html .= '</div>';
                    endwhile; 
                    wp_reset_postdata(); 
                $html .= '</div>';
            $html .= '</div>';
        endif; 
    return $html;
	
}