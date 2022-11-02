<?php 
/**
 * Registers the block using the metadata loaded from the `block.json` file.
 *
 * @since 0.1.0
 */
function create_gutenbutg_blogpreview_block_init() {
	register_block_type(
		__DIR__,
		[
			'render_callback' => 'render_inxperts_blogs',
		]
	);
}
add_action( 'init', 'create_gutenbutg_blogpreview_block_init' );

/**
 * Block render callback.
 *
 * @since 0.1.0
 * @param array $attrs Block attributes.
 *
 * @return string
 */
function render_inxperts_blogs( $attrs ) {

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
                $html .= '<div class="blog__col__wrapper">';
                    $html .= '<div class="layout__col">';
                        while ( $the_query->have_posts() ) : $the_query->the_post(); 
                        
                        $html .= '<div class="blog__item">'; 
                            $html .= '<a href="'.get_the_permalink().'" class="blog__image">'.get_the_post_thumbnail(get_the_ID()).'</a>';
                            $html .= '<div class="blog__content">'; 
                                $html .=   '<h2 class="blog__title"><a href="'.get_the_permalink().'">'.get_the_title().'</a></h2>';
                                $html .=   '<span class="blog__date">'.get_the_date().'</span>';
                                $html .=   '<div class="blog__description">'.get_the_excerpt().'</div>';
                                $html .=   '<a class="btn btn__primary pos__bottom" href="'.get_the_permalink().'">Mehr erfahren</a>';
                                
                            $html .= '</div>';
                        $html .= '</div>';
                        endwhile; 
                        wp_reset_postdata(); 
                    $html .= '</div>';
                $html .= '</div>';
            endif; 

      
    return $html;
	
}