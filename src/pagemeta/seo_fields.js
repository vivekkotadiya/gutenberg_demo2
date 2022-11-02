/**
 * WordPress dependencies
 */

 import { __ } from '@wordpress/i18n';
 import { withSelect, withDispatch } from '@wordpress/data';
 import { compose } from '@wordpress/compose';
 import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
 import { ToggleControl, TextareaControl , PanelRow } from '@wordpress/components';
 


 
const IGB_Custom_Page_Meta = ( { postType, postMeta, setPostMeta } ) => {

	if ( 'post' !== postType && 'page' !== postType ) return null;  // Will only render component for post type 'post'
	
	return(
		<PluginDocumentSettingPanel 
		title={ __( 'SEO Settings', 'inxperts-gutenberg-blocks') } 
		icon="" 
		initialOpen="false"
		className="ix_hide_panel_icon" >
			<PanelRow>
				<TextareaControl className="igb_text_area" 
					label={ __( 'Meta Title', 'inxperts-gutenberg-blocks' ) }
					value={ postMeta.seo_meta_title }
					onChange={ ( value ) => setPostMeta( { seo_meta_title: value } ) }
				/>
			</PanelRow>
			<PanelRow>
				<TextareaControl className="igb_text_area" 
					label={ __( 'Meta Description', 'inxperts-gutenberg-blocks' ) }
					value={ postMeta.seo_meta_description }
					onChange={ ( value ) => setPostMeta( { seo_meta_description: value } ) }
				/>
			</PanelRow>
			<PanelRow>
				<ToggleControl 
					label={ __( 'No Index', 'inxperts-gutenberg-blocks' ) }
					onChange={ ( value ) => setPostMeta( { seo_no_index: value } ) }
					checked={ postMeta.seo_no_index }
				/>
			</PanelRow>
			<PanelRow>
				<ToggleControl
					label={ __( 'No Follow', 'inxperts-gutenberg-blocks' ) }
					onChange={ ( value ) => setPostMeta( { seo_no_follow: value } ) }
					checked={ postMeta.seo_no_follow }
				/>
			</PanelRow>
		</PluginDocumentSettingPanel>
	);
}
 
export default compose( [
	withSelect( ( select ) => {	
		return {
			postMeta: select( 'core/editor' ).getEditedPostAttribute( 'meta' ),
			postType: select( 'core/editor' ).getCurrentPostType(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		return {
			setPostMeta( newMeta ) {
				dispatch( 'core/editor' ).editPost( { meta: newMeta } );
			}
		};
	} )
] )( IGB_Custom_Page_Meta );