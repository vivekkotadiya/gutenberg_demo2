/**
 * WordPress dependencies
*/
import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */

import './style.scss';
import Edit from './edit';
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
    edit: (props) => {

        return (
            <div {...useBlockProps()}>
                <Edit {...props} />
            </div>
        );

    },
    save: (props) => {

        return (
            <div className={`facts--wrap facts--${props.attributes.align}`}>
                <div className='facts__number'>
                    <h3 className='facts_head'>{props.attributes.number}</h3>
                </div>
                <div className='facts__content'>
                    <InnerBlocks.Content />
                </div>
            </div>
        );

    }
}