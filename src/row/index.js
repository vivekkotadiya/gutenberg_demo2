/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

/**
* Internal dependencies
*/

import './style.scss';
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
    icon : stack,
    supports,
    /**
	 * @see ./edit.js
	 */
	edit: (props) => {
        return (
            <div {...useBlockProps()}><Edit {...props} /></div>
        );
    },
    save: (props) => {
		return (
			<Save {...props} />
		);
	}
}