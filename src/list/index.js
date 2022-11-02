/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	RichText
} from '@wordpress/block-editor';

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
    icon: stack,
    supports,
    /**
     * @see ./edit.js
     */
    edit: edit,
    save: (props) => {

        const {
            attributes: {
                values,
                listStyle,
                align
            },
        } = props;  
        return (
            
            <ul className={ `ul-style-${listStyle} ul-al-${align} igb-lists` }>
                <RichText.Content value={ values } multiline="li" />
            </ul>
        );

    }
}