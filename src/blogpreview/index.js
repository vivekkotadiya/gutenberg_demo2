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

const { name } = metadata;

export { metadata, name };
 
export const settings = {
    icon: stack,
    edit: edit,
    save: (props) => {  
        return null;      
    }
}