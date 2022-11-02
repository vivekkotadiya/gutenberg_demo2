/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './style.scss';
import edit from './edit';
import save from './save';
import metadata from './block.json';
import { stack } from '../icon';
 
const { name } = metadata;

export { metadata, name };

export const settings = {
    attributes: {
		heading: {
			type: "string",
			default: "in Berlin"
		},
		address: {
			type: "string",
			default: "Wiebestraße 36 – 37, 10553 Berlin"
		},
        telefon: {
            type: "string",
			default: "+49173 799 0900"
        },
        telefonLink: {
            type: "string",
			default: "tel:491737990900"
        },
        email: {
            type: "string",
			default: "info@in-xperts.eu"
        },
        emailLink: {
            type: "string",
			default: "mailto:info@in-xperts.eu"
        }
	},
    icon: stack,
    edit,
    save
};

