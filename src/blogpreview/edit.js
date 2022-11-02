/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {  Fragment  } from '@wordpress/element';
import { SelectControl, PanelBody } from '@wordpress/components';
import { store as coreStore } from '@wordpress/core-data';
import { InspectorControls, useBlockProps} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Internal dependencies
 */
import metadata from './block.json';
const { name } = metadata;

export default function edit({ attributes, setAttributes}) { 

    const {  postType  } = attributes;  

    // useSelect to retrieve all post types
    const postTypes = useSelect(
        (select) => select(coreStore).getPostTypes({ per_page: -1 }), []
    );

    var postTypeOptions = !Array.isArray(postTypes) ? postTypes : postTypes

    .filter(
        // Filter out internal WP post types eg: wp_block, wp_navigation, wp_template, wp_template_part..
        postType => postType.viewable == true && postType.name != "Media" && postType.name != "Pages")
    .map(
        // Format the options for display in the <SelectControl/>
        (postType) => ({
            label: postType.labels.singular_name,
            value: postType.slug, // the value saved as postType in attributes
        })
    );

    return (
        <div {...useBlockProps()} >
            <Fragment>
                <InspectorControls>
                    <PanelBody title={ 'Settings' }>
                    <SelectControl
                        label="Select a Post Type"
                        value={postType}
                        options={postTypeOptions}
                        onChange={(value) => setAttributes({ postType: value })}
                    />
                    </PanelBody> 
                </InspectorControls>
                <ServerSideRender block={name} attributes={attributes} />
            </Fragment>
        </div>

    );

}