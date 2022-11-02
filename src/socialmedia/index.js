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
 
const { name } = metadata;

export { metadata, name };


export const settings = {
	description: __(
		'Render Social media data as a block',
		'inxperts-gutenberg-blocks'
	),
	keywords: [
		__('social', 'inxperts-gutenberg-blocks'),
		__('media', 'inxperts-gutenberg-blocks'),
		__('link', 'inxperts-gutenberg-blocks'),
	],
	html: true,
	attributes: {
		icons: {
			type: 'array',
			default: [
				{ icon: 'fab fa-wordpress', link: '#', linkTarget: undefined, rel: '' },
			],
			source: 'query',
			selector: '.wp-block-inxperts-social-links__link',
			query:{
				icon:{
					source: 'attribute',
					selector: 'span',
					attribute: 'class',
				},
				link:{
					source: 'attribute',
					attribute: 'href',
					type: 'string',
					default: '#'
				},
				linkTarget:{
					source: 'attribute',
					attribute: 'target',
				},			
				rel:{
					source: 'attribute',
					attribute: 'rel',
				},
			},
		},
	},
	icon : stack,
	example: {
		attributes: {
			'preview': true,
		},
	},
	edit: (props) => {
		return (
			<div {...useBlockProps({className: "inxperts-gutenberg-blocks-socialmedia-block" }) }>
				<Edit {...props} />
			</div>
		);
	},
	save: (props) => {
		return (
			<Save {...props} />
		);
	}
}
 
