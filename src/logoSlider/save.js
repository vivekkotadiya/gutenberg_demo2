/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';
 
const baseClass = 'wp-block-igb-logo-slider';

export default class Save extends Component {
    constructor(props) {
        super(...arguments);
    }
    render(){
        const { autostart, navigationArrow, xlDisplayItem, lgDisplayItem, mdDisplayItem, smDisplayItem, xsDisplayItem } = this.props.attributes;
        
        let xlAttr = 0, lgAttr = 0, mdAttr = 0, smAttr = 0, xsAttr = 0;
        
		if( xlDisplayItem == lgDisplayItem && lgDisplayItem == mdDisplayItem && mdDisplayItem == smDisplayItem && smDisplayItem == xsDisplayItem ){
			xsAttr += xsDisplayItem;
		}else if ( xlDisplayItem == lgDisplayItem && lgDisplayItem == mdDisplayItem && mdDisplayItem == smDisplayItem ){
			xsAttr += xsDisplayItem;
			smAttr += smDisplayItem;
		}else if ( xlDisplayItem == lgDisplayItem && lgDisplayItem == mdDisplayItem ){
			xsAttr += xsDisplayItem;
			smAttr += smDisplayItem;
			mdAttr += mdDisplayItem;
		}else if ( xlDisplayItem == lgDisplayItem ){
			xsAttr += xsDisplayItem;
			smAttr += smDisplayItem;
			mdAttr += mdDisplayItem;
			lgAttr += lgDisplayItem;
		}else{
			xsAttr += xsDisplayItem;
			smAttr += smDisplayItem;
			mdAttr += mdDisplayItem;
			lgAttr += lgDisplayItem;
			xlAttr += xlDisplayItem;
		}

        return(
            <div className={`${baseClass}__igb-logo-slider_container`}>
                <div className={classnames(
                    `${baseClass} igb-logo-slider`
                    )} data-autoplay={autostart} data-navigation={navigationArrow}
                    {...(xsAttr != 0 && { 'data-xs': xsAttr } ) } {...(smAttr != 0 && { 'data-sm': smAttr } ) } {...(mdAttr != 0 && { 'data-md': mdAttr } ) } {...(lgAttr != 0 && { 'data-lg': lgAttr } ) } {...(xlAttr != 0 && { 'data-xl': xlAttr } ) } >
                    <div className={`${baseClass}__content glide__track`} data-glide-el="track">
                        <div className='glide__slides'>
                            <InnerBlocks.Content/>
                        </div>
                    </div>
                    <div data-glide-el="controls" className='logo-slider-controls'>
                        <button data-glide-dir="<<" className='prev-slide'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="7.707" height="14.707" viewBox="0 0 7.707 14.707">
                                <g id="Group_475" data-name="Group 475" transform="translate(9265.854 8669.854)">
                                    <line id="Line_29" data-name="Line 29" x1="7" y2="7" transform="translate(-9265.5 -8669.5)" fill="none" stroke="#fff" stroke-width="1"/>
                                    <line id="Line_30" data-name="Line 30" x1="7" y1="7" transform="translate(-9265.5 -8662.5)" fill="none" stroke="#fff" stroke-width="1"/>
                                </g>
                            </svg>
                        </button>
                        <button data-glide-dir=">>" className='next-slide'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="7.707" height="14.707" viewBox="0 0 7.707 14.707">
                                <g id="Group_475" data-name="Group 475" transform="translate(9265.854 8669.854)">
                                    <line id="Line_29" data-name="Line 29" x1="7" y2="7" transform="translate(-9265.5 -8669.5)" fill="none" stroke="#fff" stroke-width="1"/>
                                    <line id="Line_30" data-name="Line 30" x1="7" y1="7" transform="translate(-9265.5 -8662.5)" fill="none" stroke="#fff" stroke-width="1"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}