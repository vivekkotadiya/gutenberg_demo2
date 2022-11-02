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

import classnames from "classnames";
import colClasses from "./colClasses";
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
        const bgclass = (props.attributes.colbgClass) ? `col--bg-${props.attributes.colbgClass}` : '';
        const blockProps = useBlockProps( {
            className: classnames(
                `col ${bgclass}`,
                ...colClasses(props.attributes)
                ),
          } );
        return (
            <div {...blockProps}>
                <div className='col__content'><Edit {...props} /></div>
            </div>
        );

    },
    save: (props) => {
        const bgclass = (props.attributes.colbgClass) ? `col--bg-${props.attributes.colbgClass}` : '';
		return (
            <div className={classnames(
                    `col ${bgclass}`,
                    ...colClasses(props.attributes)
                    )}>
                <div className='col__content'><InnerBlocks.Content /></div>
            </div>
		);

	}
}