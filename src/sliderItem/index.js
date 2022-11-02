/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

import { Consumer } from '../slider/edit';

/**
* Module Constants
*/
const baseClass = 'wp-block-igb-slider-slide';

/**
 * Internal dependencies
 */

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
    parent: [ 'inxperts-gutenberg-blocks/slider' ],
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
                { ( { updateContentAttributes } ) => (
                    <Edit {...{
                        ...props,
                        ...{updateContentAttributes},
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