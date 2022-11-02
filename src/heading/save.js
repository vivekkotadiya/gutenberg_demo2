 /**
 * External dependencies
 */

import classnames from 'classnames';

/**
* WordPress dependencies
*/
import { __ } from '@wordpress/i18n';

import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {

    const { textAlign, style, content, level } = attributes;

    const TagName = 'h' + level;

    const headingClass = 'ix_h' + level;

    const className  = classnames(`${textAlign}`, `${style}`, `${headingClass}`); 

    return(
        <TagName className={ className }>
			<RichText.Content value={ content } />
		</TagName>
    );
}