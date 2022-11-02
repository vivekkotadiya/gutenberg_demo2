/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

import { Consumer } from '../logoSlider/edit';

/**
* Module Constants
*/
const baseClass = 'wp-block-igb-logo-slider-slide';

/**
 * Internal dependencies
 */

//  import './style.scss';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';
import { stack } from '../icon';

const { name, category, supports, description, keywords, attributes } = metadata;

export { metadata, name };

export const settings = {
    description,
    keywords, 
    attributes, 
    category,
    parent: [ 'inxperts-gutenberg-blocks/logoslider' ],
    icon: stack,
    supports,
    getEditWrapperProps( attributes ) {
        
		const currentId = typeof attributes.slideId != 'undefined' ? attributes.slideId : attributes.id
		return { 'data-slide': currentId };
	},
    /**
     * @see ./edit.js
     */
    edit: (props) => (
        <div {...useBlockProps()}>
            <Consumer>
                { ( { updateLogoSliderContentAttributes } ) => (
                    <Edit {...{
                        ...props,
                        ...{updateLogoSliderContentAttributes},
                        baseClass
                    }} />
                )}
            </Consumer>
        </div>
    ),
    save: (props) => (
        <Save {...{
			...props,
			baseClass
		}}/>
    )
}