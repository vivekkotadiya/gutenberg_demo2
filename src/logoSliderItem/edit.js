/**
* External dependencies
*/
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { 
    Spinner, 
    Button, 
    PanelBody, 
    ResponsiveWrapper, 
    TextControl
} from '@wordpress/components';

import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';

class Edit extends Component {
    constructor(props) {
		super( ...arguments );
	}
    
    render(){

        const {
            attributes: {
                slideId,
                mediaId,
                mediaUrl,
                mediaAlt
            },
            setAttributes,
            baseClass,
            backgroundImage
        } = this.props;

        const onUpdateImage = ( image ) => {
            setAttributes( {
                mediaId: image.id,
                mediaUrl: image.url,
                mediaAlt: image.alt
            } );
        };

        const onRemoveImage = ( image ) => {
            
            setAttributes( {
                mediaId: undefined,
                mediaUrl: ''
            } );
        };

        const instructions = <p>{ __( 'To edit the background image, you need permission to upload media.', 'inxperts-gutenberg-blocks' ) }</p>;

        const ALLOWED_MEDIA_TYPES = [ 'image' ];

        return(
            <Fragment>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'Image', 'inxperts-gutenberg-blocks' ) }
                        initialOpen={ true }
                        >
                            <MediaUploadCheck fallback={ instructions }>
                                <MediaUpload
                                    title={ __( 'Image', 'inxperts-gutenberg-blocks' ) }
                                    onSelect={ onUpdateImage }
                                    allowedTypes={ ALLOWED_MEDIA_TYPES }
                                    value={ mediaId }
                                    render={ ( {open} ) => (
                                        <Button
                                            className={ ! mediaId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
                                            onClick={ open }>
                                            { !! mediaId && ! backgroundImage && <Spinner /> }
                                            { ! mediaId && ( __( 'Set image', 'inxperts-gutenberg-blocks' ) ) }
                                            { !! mediaId && backgroundImage &&
                                                <ResponsiveWrapper
                                                    naturalWidth={ backgroundImage.media_details.width }
                                                    naturalHeight={ backgroundImage.media_details.height }
                                                >
                                                    <img src={ backgroundImage.source_url } alt={ __( 'Background image', 'inxperts-gutenberg-blocks' ) } />
                                                </ResponsiveWrapper>
                                            }
                                        </Button>
                                    )}
                                />
                            </MediaUploadCheck>
                            { !! mediaId && backgroundImage ?
                                    <MediaUploadCheck>
                                        <MediaUpload
                                            title={ __( 'Background Image', 'inxperts-gutenberg-blocks' ) }
                                            onSelect={ onUpdateImage }
                                            allowedTypes={ ALLOWED_MEDIA_TYPES }
                                            value={ mediaId }
                                            render={ ( { open } ) => (
                                                <Button onClick={ open } isDefault isLarge isLink className='ix-section-background-image-replace'>
                                                    { __( 'Replace background image', 'inxperts-gutenberg-blocks' ) }
                                                </Button>
                                            ) }
                                        />
                                    </MediaUploadCheck>
                                :<></>  
                            }
                            { !! mediaId ?
                                    <MediaUploadCheck>
                                        <Button onClick={ onRemoveImage } isLink isDestructive className='ix-section-background-image-remove'>
                                            { __( 'Remove background image', 'inxperts-gutenberg-blocks' ) }
                                        </Button>
                                    </MediaUploadCheck>
                                :<></>  
                            }
                            <TextControl
                                label={__(
                                    "Alt text",
                                    "inxperts-gutenberg-blocks"
                                )}
                                type="text"
                                placeholder="Overwrite default Alt-Text..."
                                value={mediaAlt}
                                onChange={(value) => setAttributes({ mediaAlt: value })} />
                    </PanelBody>
                </InspectorControls>
                <div className={`igb-logo-slide-main-wrapper logo-slide-${ slideId } glide__slide`}>
                    { mediaUrl ? 
                        <>
                            <figure className={ `logo-slide-image` }>
                                <img className={ `${baseClass}__image` } src={ mediaUrl } alt={ mediaAlt } />
                            </figure>
                        </>
                        : <><div>Select logo slider image...</div></>
                    }
                </div>
            </Fragment>
        )
    }
}

export default compose( 
	withSelect( ( select, props ) => {
		const { getMedia } = select( 'core' );
		const { mediaId } = props.attributes;
        
		return {
			backgroundImage: mediaId ? getMedia( mediaId ) : null,
		};
	} ),
)( Edit );