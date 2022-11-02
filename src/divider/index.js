/**
 * WordPress dependencies
 */
 import { __ } from '@wordpress/i18n';

/**
* Internal dependencies
*/

import './style.scss';
import edit from './edit';
import metadata from './block.json';
import { stack } from '../icon';

const { name, category, supports, description, keywords, attributes } = metadata;

export { metadata, name };

export const settings = {
    description,
    keywords, 
    attributes, 
    category,
    icon : stack,
    supports,
    /**
	 * @see ./edit.js
	 */
	edit: edit,
    save: (props) => {

        const {
            attributes: {
                style,
                paddingTop,
                paddingBottom,
            },
        } = props;  
		return (
            <div class={`dv-top-${paddingTop} dv-bottom-${paddingBottom}`}>
                <hr class={`${style}`} />
            </div>
		);

	}
}