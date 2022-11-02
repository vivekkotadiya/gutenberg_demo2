/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings, MediaUpload, MediaUploadCheck, InnerBlocks, withColors, getColorClassName } from '@wordpress/block-editor';
import { 
    Spinner, 
    Button, 
    PanelBody, 
    ResponsiveWrapper, 
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
    TextControl,
    ToggleControl
} from '@wordpress/components';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import './editor.scss';

class Edit extends Component {
    constructor(props) {
        super(...arguments);
    }

    render(){
        
        const {
            attributes: {
                backgroundColor, 
                backgroundColorClass, 
                xlbackgroundImageId,
                lgbackgroundImageId,
                mdbackgroundImageId,
                smbackgroundImageId,
                xsbackgroundImageId,
                padding,
                bgResponsiveMode,
                anchor,
                hideOnDesktop,
                hideOnTablet,
                hideOnMobile
            },
            xlbackgroundImage,
            lgbackgroundImage,
            mdbackgroundImage,
            smbackgroundImage,
            xsbackgroundImage,
            setAttributes,
            hasChildBlocks
        } = this.props;

        const instructions = <p>{ __( 'To edit the background image, you need permission to upload media.', 'inxperts-gutenberg-blocks' ) }</p>;

        const ALLOWED_MEDIA_TYPES = [ 'image' ];

        const ALLOWED_BLOCKS = [ 'inxperts-gutenberg-blocks/inxperts-row', 'inxperts-gutenberg-blocks/inxperts-divider' ];

        const onUpdateImage = ( image ) => {
            
            if( bgResponsiveMode == 'xl' ){
                setAttributes( {
                    xlbackgroundImageId: image.id,
                    xlbackgroundImagesrc: image.url,
                } );
            }
            if( bgResponsiveMode == 'lg' ){
                setAttributes( {
                    lgbackgroundImageId: image.id,
                    lgbackgroundImagesrc: image.url,
                } );
            }
            if( bgResponsiveMode == 'md' ){
                setAttributes( {
                    mdbackgroundImageId: image.id,  
                    mdbackgroundImagesrc: image.url,                  
                } );
            }
            if( bgResponsiveMode == 'sm' ){
                setAttributes( {
                    smbackgroundImageId: image.id,
                    smbackgroundImagesrc: image.url,
                } );
            }
            if( bgResponsiveMode == 'xs' ){
                setAttributes( {
                    xsbackgroundImageId: image.id,
                    xsbackgroundImagesrc: image.url,
                } );
            }
        };
        
        const onRemoveImage = () => {
            if( bgResponsiveMode == 'xl' ){
                setAttributes( {
                    xlbackgroundImageId: undefined,
                } );
            }
            if( bgResponsiveMode == 'lg' ){
                setAttributes( {
                    lgbackgroundImageId: undefined,
                } );
            }
            if( bgResponsiveMode == 'md' ){
                setAttributes( {
                    mdbackgroundImageId: undefined,
                } );
            }
            if( bgResponsiveMode == 'sm' ){
                setAttributes( {
                    smbackgroundImageId: undefined,
                } );
            }
            if( bgResponsiveMode == 'xs' ){
                setAttributes( {
                    xsbackgroundImageId: undefined,
                } );
            }
        };
      
        let hideSection = '';
        if( hideOnDesktop == true ){
            hideSection += 'section--lg-hide ';
        }
        if( hideOnTablet == true ){
            hideSection += 'section--md-hide ';
        }
        if( hideOnMobile == true ){
            hideSection += 'section--xs-hide ';
        }

        const resMode = ['xs', 'sm', 'md', 'lg', 'xl'];
        
        const responsiveBgImage = {   
            'xs': {
                'BgId' : xsbackgroundImageId,
                'BgImage' : xsbackgroundImage
            },
            'sm': {
                'BgId' : smbackgroundImageId,
                'BgImage' : smbackgroundImage
            },
            'md': {
                'BgId' : mdbackgroundImageId,
                'BgImage' : mdbackgroundImage
            },
            'lg': {
                'BgId' : lgbackgroundImageId,
                'BgImage' : lgbackgroundImage
            },
            'xl': {
                'BgId' : xlbackgroundImageId,
                'BgImage' : xlbackgroundImage
            },
        };

        const IGBColors = [
            {
                name: 'Primary',
                slug: 'one',
                color: '#F6790E'
            },
            {
                name: 'Secondary',
                slug: 'two',
                color: '#343434'
            },
            {
                name: 'White',
                slug: 'three',
                color: '#ffffff'
            },
            {
                name: 'Black',
                slug: 'four',
                color: '#141B20'
            },
            {
                name: 'Grey',
                slug: 'five',
                color: '#f5f5f5'
            }
        ];

        const SetColorClass = ( value ) => {
            IGBColors.filter(function(item){
                if( item.color == value ){
                    setAttributes({
                        backgroundColorClass: item.slug
                    });
                }    
            });
        }
        const bgclass = (backgroundColorClass) ? `section--bg-${backgroundColorClass}` : '';

        return(
            <>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'Settings', 'inxperts-gutenberg-blocks' ) }
                        initialOpen={ true }
                        >                            
                            <ToggleGroupControl label="Padding" className="ix-togglegroup"
                                value={padding} isBlock 
                                onChange={ (value) => {    
                                    setAttributes( {
                                        padding: value,
                                    } );
                                } }>
                                <ToggleGroupControlOption value="0" label="0" showTooltip={ true } aria-label="Small" />
                                <ToggleGroupControlOption value="1" label="1" showTooltip={ true } aria-label="Medium" />
                                <ToggleGroupControlOption value="2" label="2" showTooltip={ true } aria-label="Large" />
                                <ToggleGroupControlOption value="3" label="3" showTooltip={ true } aria-label="Extra Large" />
                            </ToggleGroupControl>                        
                    </PanelBody>
                    <PanelBody
                        title={ __( 'Background', 'inxperts-gutenberg-blocks' ) }
                        initialOpen={ true }
                        >
                        <ToggleGroupControl label="Responsive Mode" className="ix-togglegroup"
                            value={bgResponsiveMode} isBlock 
                            onChange={ (value) => {    
                                setAttributes( {
                                    bgResponsiveMode: value,
                                } );
                            } }>
                            <ToggleGroupControlOption value="xs" label="XS" showTooltip={ true } aria-label="Extra Small" />
                            <ToggleGroupControlOption value="sm" label="SM" showTooltip={ true } aria-label="Small" />
                            <ToggleGroupControlOption value="md" label="MD" showTooltip={ true } aria-label="Medium" />                            
                            <ToggleGroupControlOption value="lg" label="LG" showTooltip={ true } aria-label="Large" />
                            <ToggleGroupControlOption value="xl" label="XL" showTooltip={ true } aria-label="Extra Large" />
                        </ToggleGroupControl>
                        {bgResponsiveMode && (
                            <div className='media-control'>
                                {resMode.map((item, index) => {
                                    return <div className='media-control-wrap' id={`media-${index}`}>
                                        { bgResponsiveMode == item ?
                                            <MediaUploadCheck fallback={ instructions }>
                                                <MediaUpload
                                                    title={ __( 'Background Image', 'inxperts-gutenberg-blocks' ) }
                                                    onSelect={ onUpdateImage }
                                                    allowedTypes={ ALLOWED_MEDIA_TYPES }
                                                    value={ responsiveBgImage[item]['BgId'] }
                                                    render={ ( {open} ) => (
                                                        <Button
                                                            id={`media-imgbtn-${index}`}
                                                            className={ ! responsiveBgImage[item]['BgId'] ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
                                                            onClick={ open }>
                                                            { !! responsiveBgImage[item]['BgId'] && ! responsiveBgImage[item]['BgImage'] && <Spinner /> }
                                                            { ! responsiveBgImage[item]['BgId'] && ( __( 'Set image', 'inxperts-gutenberg-blocks' ) ) }
                                                            { !! responsiveBgImage[item]['BgId'] && responsiveBgImage[item]['BgImage'] &&
                                                                <ResponsiveWrapper
                                                                    naturalWidth={ responsiveBgImage[item]['BgImage'].media_details.width }
                                                                    naturalHeight={ responsiveBgImage[item]['BgImage'].media_details.height }
                                                                >
                                                                    <img src={ responsiveBgImage[item]['BgImage'].source_url } alt={ __( 'Background image', 'inxperts-gutenberg-blocks' ) } />
                                                                </ResponsiveWrapper>
                                                            }
                                                        </Button>
                                                    ) }
                                                />
                                            </MediaUploadCheck>
                                        : <></>
                                        } 
                                        { bgResponsiveMode == item && !! responsiveBgImage[item]['BgId'] && responsiveBgImage[item]['BgImage'] ?
                                                <MediaUploadCheck>
                                                    <MediaUpload
                                                        title={ __( 'Background Image', 'inxperts-gutenberg-blocks' ) }
                                                        onSelect={ onUpdateImage }
                                                        allowedTypes={ ALLOWED_MEDIA_TYPES }
                                                        value={ responsiveBgImage[item]['BgId'] }
                                                        render={ ( { open } ) => (
                                                            <Button id={`media-replacebtn-${index}`} onClick={ open } isDefault isLarge isLink className='ix-section-background-image-replace'>
                                                                { __( 'Replace background image', 'inxperts-gutenberg-blocks' ) }
                                                            </Button>
                                                        ) }
                                                    />
                                                </MediaUploadCheck>
                                            :<></>  
                                        }
                                        { bgResponsiveMode == item && !! responsiveBgImage[item]['BgId'] ?
                                                <MediaUploadCheck>
                                                    <Button id={`media-removebtn-${index}`} onClick={ onRemoveImage } isLink isDestructive className='ix-section-background-image-remove'>
                                                        { __( 'Remove background image', 'inxperts-gutenberg-blocks' ) }
                                                    </Button>
                                                </MediaUploadCheck>
                                            :<></>  
                                        }
                                    </div>                     
                                })}
                            
                            </div>
                        )}
                                             
                        <PanelColorSettings 
                            title={__("Background color", "inxperts-gutenberg-blocks")}
                            className={ 'ix-color-setting' }
                            colorSettings={[
                                {
                                    colors: IGBColors,
                                    value: backgroundColor,
                                    onChange: (value) => {
                                        SetColorClass(value);
                                        setAttributes({ backgroundColor: value });
                                    },
                                    label: __('Background Color')
                                },
                            ]}
                        />
                    </PanelBody>
                    
                    <PanelBody
                        title={ __( 'Additional', 'inxperts-gutenberg-blocks' ) }
                        initialOpen={ true }
                        >
                            <TextControl
                                label={__(
                                    "Anchor",
                                    "inxperts-gutenberg-blocks"
                                )}
                                type="text"
                                value={anchor}
                                onChange={(value) => setAttributes({ anchor: value })} />

                            <ToggleControl
                                label="Hide on Desktop"
                                checked={ hideOnDesktop }
                                onChange={() => setAttributes({
                                    hideOnDesktop: !hideOnDesktop,
                                })}
                            />

                            <ToggleControl
                                label="Hide on Tablet"
                                checked={ hideOnTablet }
                                onChange={() => setAttributes({
                                    hideOnTablet: !hideOnTablet,
                                })}
                            />

                            <ToggleControl
                                label="Hide on Mobile"
                                checked={ hideOnMobile }
                                onChange={() => setAttributes({
                                    hideOnMobile: !hideOnMobile,
                                })}
                            />
                    </PanelBody>

                </InspectorControls>
                <section id={anchor} className={`section section--pd-${padding} ${hideSection} ${bgclass}`} >
                    { ( xsbackgroundImage || smbackgroundImage || mdbackgroundImage || lgbackgroundImage || xlbackgroundImage ) && (
                        <div className="section__background">
                            <picture>
                                { xsbackgroundImage ? 
                                    <source media="(max-width:460px)" srcset={`${xsbackgroundImage.source_url}`} />
                                :''}
                                { smbackgroundImage ? 
                                    <source media="(min-width:460px)" srcset={`${smbackgroundImage.source_url}`} />
                                : ''}
                                { mdbackgroundImage ? 
                                    <source media="(min-width:768px)" srcset={`${mdbackgroundImage.source_url}`} />
                                : ''}
                                { lgbackgroundImage ? 
                                    <source media="(min-width:960px)" srcset={`${lgbackgroundImage.source_url}`} />
                                : ''}
                                { xlbackgroundImage ? 
                                    <source media="(min-width:1200px)" srcset={`${xlbackgroundImage.source_url}`} />
                                : ''}
                                { xsbackgroundImage ? 
                                    <img src={`${xsbackgroundImage.source_url}`} alt="" width="auto" height="auto" />
                                : !xsbackgroundImage && smbackgroundImage ? 
                                    <img src={`${smbackgroundImage.source_url}`} alt="" width="auto" height="auto" />
                                : !xsbackgroundImage && !smbackgroundImage && mdbackgroundImage ? 
                                    <img src={`${mdbackgroundImage.source_url}`} alt="" width="auto" height="auto" />
                                : !xsbackgroundImage && !smbackgroundImage && !mdbackgroundImage && lgbackgroundImage ?
                                    <img src={`${lgbackgroundImage.source_url}`} alt="" width="auto" height="auto" />
                                : !xsbackgroundImage && !smbackgroundImage && !mdbackgroundImage && !lgbackgroundImage && xlbackgroundImage ?
                                    <img src={`${xlbackgroundImage.source_url}`} alt="" width="auto" height="auto" />
                                : '' }
                            </picture>
                        </div>
                    )}
                    <div className={`section__content`}>
                        <InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } renderAppender={
							hasChildBlocks
								? undefined
								: () => <InnerBlocks.ButtonBlockAppender />
						}/>
                    </div>
                </section>
            </>
        )
    }

}
export default compose(
    withSelect( ( select, props ) => {
        const { getMedia } = select( 'core' );
        const { xlbackgroundImageId,
            lgbackgroundImageId,
            mdbackgroundImageId,
            smbackgroundImageId,
            xsbackgroundImageId, } = props.attributes;
       
        const { clientId } = props;
        const { getBlockOrder } =
            select( 'core/block-editor' ) || select( 'core/editor' ); // Fallback to 'core/editor' for backwards compatibility
    
        return {
            xlbackgroundImage: xlbackgroundImageId ? getMedia( xlbackgroundImageId ) : null,
            lgbackgroundImage: lgbackgroundImageId ? getMedia( lgbackgroundImageId ) : null,
            mdbackgroundImage: mdbackgroundImageId ? getMedia( mdbackgroundImageId ) : null,
            smbackgroundImage: smbackgroundImageId ? getMedia( smbackgroundImageId ) : null,
            xsbackgroundImage: xsbackgroundImageId ? getMedia( xsbackgroundImageId ) : null,
            hasChildBlocks: getBlockOrder( clientId ).length > 0,
        };
    } ),
)( Edit );