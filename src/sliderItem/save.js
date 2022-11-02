/**
* External dependencies
*/
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';

export default class Save extends Component {
    render(){
        const {
			attributes: {
				mediaAlt,
				mediaUrl,
                slideHead,
                slideId,
                outerParent 
			},
			baseClass
		} = this.props;
        
        let autostart;
        if ( typeof outerParent.attributes != 'undefined' ) {
            const { attributes } = outerParent;
            autostart = attributes.autostart;
        }
        const createMarkup = ( html ) => { return { __html: html } };
        return(
            <div className={`igb-slide-main-wrapper slide-${ slideId } glide__slide`}>
                <figure className={ `slide-image` }>
                    <img className={ `${baseClass}__image` } src={ mediaUrl } alt={ mediaAlt } />
                </figure>
                <div className={`igb-slider-slide__content`}>
                    <div className={`igb-slider-slide__content-wrapper slide-${slideId}`} data-autostart={autostart}>
                        <h3 className='slide_title' dangerouslySetInnerHTML={ createMarkup(slideHead) }></h3>
                    </div>
                </div>
            </div>
        )
    }
}