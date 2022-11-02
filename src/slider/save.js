/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';
 
const baseClass = 'wp-block-igb-media-text-slider';

export default class Save extends Component {
    constructor(props) {
        super(...arguments);
    }
    render(){
        const { innerItem, autostart } = this.props.attributes;
        const sliderClass = ( autostart == true ) ? ' igb__slider_autoplay' : '';
        
        return(
            <div className={classnames(
                `${baseClass} igb-slider${sliderClass}`
            )} data-autoplay={autostart}>
                <div className={`${baseClass}__content glide__track`} data-glide-el="track">
                    <div className='glide__slides'>
                        <InnerBlocks.Content/>
                    </div>
                </div>
            
                {innerItem && (
                    <ul className='slider_navigation glide__bullets' data-glide-el="controls[nav]">
                    
                        {innerItem.map((item, index) => {
                            let i = '=' + index;
                            return(
                                <li className='slide_nav glide__bullet' data-glide-dir={i}>
                                    {item.attributes.igbNav}
                                </li>
                            );
                        } )} 
                    
                    </ul>
                ) }
            </div>
        )
    }
}