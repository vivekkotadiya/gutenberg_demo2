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
                slideId
			},
			baseClass
		} = this.props;
        
        return(
            <div className={`igb-logo-slide-main-wrapper logo-slide-${ slideId } glide__slide`}>
                <figure className={ `logo-slide-image` }>
                    <img className={ `${baseClass}__image` } src={ mediaUrl } alt={ mediaAlt } />
                </figure>
            </div>
        )
    }
}