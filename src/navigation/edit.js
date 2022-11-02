/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect, useRef } from "@wordpress/element";
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { SelectControl, Disabled, PanelBody } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';


/**
 * Internal dependencies
 */
import useNavigationEntities from './use-navigation-entities';
import './editor.scss';
import metadata from './block.json';

const { name } = metadata;

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param {Object}   props
 * @param {Function} props.setAttributes
 * @param {Object}   props.attributes
 * @param {boolean}  props.isSelected
 * @return {WPElement} Element to render.
 */
export default function Edit({ setAttributes, attributes, isSelected }) {
	
	const { menu = 0 } = attributes || {};

	const { menus, hasMenus } = useNavigationEntities();

	const options = [{ value: 0, label: __('Not set', 'inxperts-gutenberg-blocks') }];
	if (hasMenus) {
		menus.forEach(function (item) {
			options.push({ value: parseInt(item.id), label: item.name });
		});
	}

	const onSaveMenu = (value) => {
		setAttributes({ menu: parseInt(value) });
	};

	return (
		<div {...useBlockProps()} >
			  	<InspectorControls key="setting">
					<PanelBody title={ __( 'Settings' ) }>							
						<SelectControl
							label={__('Select a menu', 'inxperts-gutenberg-blocks')}
							options={options}
							value={menu}
							onChange={onSaveMenu}
						/>							
					</PanelBody>
				</InspectorControls>
			{isSelected && menu ? (
				<Disabled>
					<div className='wp-classic-menu-wrap'>
						<ServerSideRender block={name} attributes={attributes} />
					</div>
				</Disabled>
			) : (
				<Disabled>
					<div className='wp-classic-menu-wrap'>
						<ServerSideRender block={name} attributes={attributes} />
					</div>
				</Disabled>
			)}
		</div>
	);
}
