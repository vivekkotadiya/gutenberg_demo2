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

const { name, category, supports, description, keywords } = metadata;

export { metadata, name };
 
export const settings = {
    description,
    keywords, 
    attributes: {
        sliderArrays: {
            type: 'string',
            default: '["Slide 1","Slide 2","Slide 3"]'
        },
        slideCount: {
            type: 'number',
            default: 3,
        },
        autostart: {
            type: 'boolean',
            default: false
        },
        innerItem: {
            type: 'array'
        }
    }, 
    category,
    icon: stack,
    supports,
    /**
     * @see ./edit.js
     */
    edit: (props) => {
        return (
            <div {...useBlockProps()}>{<Edit {...props}/>}</div>
        );
    },
    save: (props) => {
        return (
            <Save {...props} />
        );
    }
}