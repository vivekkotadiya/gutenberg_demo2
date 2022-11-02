/**
 * InXperts Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */

/**
 * WordPress dependencies
 */
 import {
	registerBlockType
} from '@wordpress/blocks';

import style from './style.scss';

import * as Navigation from './Navigation';
import * as socialmedia from './socialmedia';
import * as googlemap from './googlemap';
import * as contactinfo from './contactInfo';
import * as section from './section';
import * as row from './row';
import * as column from './column';
import * as heading from './heading';
import * as paragraph from './paragraph';
import * as list from './list';
import * as image from './image';
import * as button from './button';
import * as divider from './divider';
import * as slider from './slider';
import * as sliderItem from './sliderItem';
import * as logoslider from './logoSlider';
import * as logoslideritem from './logoSliderItem';
import * as blogpreview from './blogpreview';
import * as bloglist from './bloglist';
import * as facts from './facts';

/**
 * Plugins for exsiting gutenburg code
 */

import * as pagemeta from './pagemeta';




/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 */
 const registerBlock = ( block ) => {

	if ( ! block ) {
		return;
	}
	const { metadata, settings, name } = block;
	
	registerBlockType( { name, ...metadata }, settings );
};

/**
 * Function to get all the core blocks in an array.
 *
 * @example
 * ```js
 * import { __experimentalGetCoreBlocks } from '@wordpress/block-library';
 *
 * const coreBlocks = __experimentalGetCoreBlocks();
 * ```
 */
 export const __experimentalGetCoreBlocks = () => [
    Navigation,
    socialmedia,
	googlemap,
    contactinfo,
	section,
	row,
	column,
	heading,
	paragraph,
	list,
	image,
	button,
	divider,	
	slider,
	sliderItem,
	logoslider,
	logoslideritem,
	blogpreview,
	bloglist,
	facts
];



/**
 * Function to register core blocks provided by the block editor.
 *
 * @param {Array} blocks An optional array of the core blocks being registered.
  *
 * registerCoreBlocks();
 * ```
 */

 var blocks = __experimentalGetCoreBlocks();

 blocks.forEach( registerBlock );
