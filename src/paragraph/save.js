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
    const { textAlign, style, content, tag } = attributes;

    const TagName = tag;

    const className  = classnames(`${textAlign}`, `${style}`); 

    return(
        <TagName className={ className }>
			<RichText.Content value={ content } />
		</TagName>
    );
}