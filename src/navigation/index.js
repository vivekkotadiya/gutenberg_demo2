/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { stack } from '../icon';

/**
 * Internal dependencies
 */
import './style.scss';
import Edit from './edit';
import metadata from './block.json';

const { name, category, attributes, supports } = metadata;

export { metadata, name };


export const settings = {
	description: __(
		'Render classic menu data as a block',
		'inxperts-gutenberg-blocks'
	),
	keywords: [
		__('classic', 'inxperts-gutenberg-blocks'),
		__('menu', 'inxperts-gutenberg-blocks'),
		__('navigation', 'inxperts-gutenberg-blocks'),
	],
	category,
	attributes,
	supports,
	icon: stack,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
}

