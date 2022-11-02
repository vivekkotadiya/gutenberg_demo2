/**
 * WordPress dependencies
 */
 import { registerPlugin  } from '@wordpress/plugins';
 import { __ } from '@wordpress/i18n';


 /**
 * Internal dependencies
 */
 import './editor.scss';
 import IGB_Custom_Page_Meta from './seo_fields';
 
registerPlugin( 'igb-custom-postmeta-fields', {
	render: IGB_Custom_Page_Meta,
} );