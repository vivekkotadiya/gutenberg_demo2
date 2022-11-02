/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { 
    Spinner, 
    Button, 
    PanelBody, 
    ResponsiveWrapper, 
    TextControl
} from '@wordpress/components';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';

class Edit extends Component {
    constructor(props) {
        super(...arguments);
    }
    render(){
        
        const {
            attributes: {
                imageId,
                altText,
                imageUrl,
                smimageUrl,
                mdimageUrl,
                lgimageUrl,
                xlimageUrl
            },
            backgroundImage,
            setAttributes,
        } = this.props;

        const instructions = <p>{ __( 'To edit the background image, you need permission to upload media.', 'inxperts-gutenberg-blocks' ) }</p>;

        const ALLOWED_MEDIA_TYPES = [ 'image' ];

        const onUpdateImage = ( image ) => {
            
            setAttributes( {
                imageId: image.id,
                imageUrl: image.url
            } );
        };
        
        const onRemoveImage = () => {
            setAttributes( {
                imageId: undefined,
            } );
        };

        if( backgroundImage ){
            
            if( backgroundImage.media_details.sizes['xl'] ) {
                setAttributes( {
                    xlimageUrl: backgroundImage.media_details.sizes['xl'].source_url,
                } );
            }
            if( backgroundImage.media_details.sizes['lg'] ) {
                setAttributes( {
                    lgimageUrl: backgroundImage.media_details.sizes['lg'].source_url,
                } );
            }
            if( backgroundImage.media_details.sizes['md'] ) {
                setAttributes( {
                    mdimageUrl: backgroundImage.media_details.sizes['md'].source_url,
                } );
            }
            if( backgroundImage.media_details.sizes['sm'] ) {
                setAttributes( {
                    smimageUrl: backgroundImage.media_details.sizes['sm'].source_url,
                } );
            }
        }

        return(
            <>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'Settings', 'inxperts-gutenberg-blocks' ) }
                        initialOpen={ true }
                        >
                            <MediaUploadCheck fallback={ instructions }>
                                <MediaUpload
                                    title={ __( 'Background Image', 'inxperts-gutenberg-blocks' ) }
                                    onSelect={ onUpdateImage }
                                    allowedTypes={ ALLOWED_MEDIA_TYPES }
                                    value={ imageId }
                                    render={ ( {open} ) => (
                                        <Button
                                            className={ ! imageId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
                                            onClick={ open }>
                                            { !! imageId && ! backgroundImage && <Spinner /> }
                                            { ! imageId && ( __( 'Set image', 'inxperts-gutenberg-blocks' ) ) }
                                            { !! imageId && backgroundImage &&
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
                            { !! imageId && backgroundImage ?
                                    <MediaUploadCheck>
                                        <MediaUpload
                                            title={ __( 'Background Image', 'inxperts-gutenberg-blocks' ) }
                                            onSelect={ onUpdateImage }
                                            allowedTypes={ ALLOWED_MEDIA_TYPES }
                                            value={ imageId }
                                            render={ ( { open } ) => (
                                                <Button onClick={ open } isDefault isLarge isLink className='ix-section-background-image-replace'>
                                                    { __( 'Replace background image', 'inxperts-gutenberg-blocks' ) }
                                                </Button>
                                            ) }
                                        />
                                    </MediaUploadCheck>
                                :<></>  
                            }
                            { !! imageId ?
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
                                value={altText}
                                onChange={(value) => setAttributes({ altText: value })} />
                    </PanelBody>
                </InspectorControls>
                { (imageUrl || smimageUrl || mdimageUrl || lgimageUrl || xlimageUrl) ? (
                    <picture>
                        { smimageUrl ? 
                            <source media="(max-width:460px)" srcset={`${smimageUrl}`} />
                        :''}
                        { mdimageUrl ? 
                            <source media="(min-width:460px)" srcset={`${mdimageUrl}`} />
                        : ''}
                        { lgimageUrl ? 
                            <source media="(min-width:768px)" srcset={`${lgimageUrl}`} />
                        : ''}
                        { xlimageUrl ? 
                            <source media="(min-width:960px)" srcset={`${xlimageUrl}`} />
                        : ''}
                        { imageUrl ? 
                            <source media="(min-width:1200px)" srcset={`${imageUrl}`} />
                        : ''}
                        { smimageUrl ? 
                            <img src={`${smimageUrl}`} alt="" width="auto" height="auto" />
                        : !smimageUrl && mdimageUrl ? 
                            <img src={`${mdimageUrl}`} alt="" width="auto" height="auto" />
                        : !smimageUrl && !mdimageUrl && lgimageUrl ? 
                            <img src={`${lgimageUrl}`} alt="" width="auto" height="auto" />
                        : !smimageUrl && !mdimageUrl && !lgimageUrl && xlimageUrl ?
                            <img src={`${xlimageUrl}`} alt="" width="auto" height="auto" />
                        : !smimageUrl && !mdimageUrl && !lgimageUrl && !xlimageUrl && imageUrl ?
                            <img src={`${imageUrl}`} alt={`${altText}`} width="auto" height="auto" />
                        : '' } 
                    </picture>
                ) : <div>Select an image...</div> }
            </>
        )
    }
}
export default compose(
    withSelect( ( select, props ) => {
        const { getMedia } = select( 'core' );
        const { imageId } = props.attributes;
       
        return {
            backgroundImage: imageId ? getMedia( imageId ) : null,
        };
    } ),
)( Edit );