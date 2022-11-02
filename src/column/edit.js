/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, InnerBlocks, PanelColorSettings } from '@wordpress/block-editor';
import { 
    PanelBody, 
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption, 
    ToggleControl,
    SelectControl,
    RangeControl, Button 
} from '@wordpress/components';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';

class Edit extends Component {
    render(){
        const {
            attributes: {
                backgroundColor,
                colbgClass, 
                colResponsiveMode,
                xlwidth,
                lgwidth,
                mdwidth,
                smwidth,
                xswidth,
                xloffset,
                lgoffset,
                mdoffset,
                smoffset,
                xsoffset,
                xlcolPadding,
                lgcolPadding,
                mdcolPadding,
                smcolPadding,
                xscolPadding,
                xlalignH,
                lgalignH,
                mdalignH,
                smalignH,
                xsalignH,
                xlalignV,
                lgalignV,
                mdalignV,
                smalignV,
                xsalignV,
                hideonDesktop,
                hideonTablet,
                hideonMobile
            },
            setAttributes,
            hasChildBlocks
        } = this.props;

        const resMode = [ 'xs', 'sm', 'md', 'lg', 'xl' ];

        const colSettings = {
            'xs' : {
                'width' : xswidth,
                'offset' : xsoffset,
                'padding' : xscolPadding,
                'alignH' : xsalignH,
                'alignV' : xsalignV
            },
            'sm' : {
                'width' : smwidth,
                'offset' : smoffset,
                'padding' : smcolPadding,
                'alignH' : smalignH,
                'alignV' : smalignV
            },
            'md' : {
                'width' : mdwidth,
                'offset' : mdoffset,
                'padding' : mdcolPadding,
                'alignH' : mdalignH,
                'alignV' : mdalignV
            },
            'lg' : {
                'width' : lgwidth,
                'offset' : lgoffset,
                'padding' : lgcolPadding,
                'alignH' : lgalignH,
                'alignV' : lgalignV
            },
            'xl' : {
                'width' : xlwidth,
                'offset' : xloffset,
                'padding' : xlcolPadding,
                'alignH' : xlalignH,
                'alignV' : xlalignV
            }
        }

        const onChangeWidth = ( value ) => {
            if( colResponsiveMode == 'xl' ){
                setAttributes({
                    xlwidth : value !== undefined ? value : 6
                });
            }
            if( colResponsiveMode == 'lg' ){
                setAttributes({
                    lgwidth : value !== undefined ? value : 6
                });
            }
            if( colResponsiveMode == 'md' ){
                setAttributes({
                    mdwidth : value !== undefined ? value : 6
                });
            }
            if( colResponsiveMode == 'sm' ){
                setAttributes({
                    smwidth : value !== undefined ? value : 6
                });
            }
            if( colResponsiveMode == 'xs' ){
                setAttributes({
                    xswidth : value !== undefined ? value : 6
                });
            }
        }
        const onChangeOffset = ( value ) => {
            if( colResponsiveMode == 'xl' ){
                setAttributes({
                    xloffset : value !== undefined ? value : 6
                });
            }
            if( colResponsiveMode == 'lg' ){
                setAttributes({
                    lgoffset : value !== undefined ? value : 6
                });
            }
            if( colResponsiveMode == 'md' ){
                setAttributes({
                    mdoffset : value !== undefined ? value : 6
                });
            }
            if( colResponsiveMode == 'sm' ){
                setAttributes({
                    smoffset : value !== undefined ? value : 6
                });
            }
            if( colResponsiveMode == 'xs' ){
                setAttributes({
                    xsoffset : value !== undefined ? value : 6
                });
            }
        }
        const onChangePadding = ( value ) => {
            if( colResponsiveMode == 'xl' ){
                setAttributes({
                    xlcolPadding : value
                });
            }
            if( colResponsiveMode == 'lg' ){
                setAttributes({
                    lgcolPadding : value
                });
            }
            if( colResponsiveMode == 'md' ){
                setAttributes({
                    mdcolPadding : value
                });
            }
            if( colResponsiveMode == 'sm' ){
                setAttributes({
                    smcolPadding : value
                });
            }
            if( colResponsiveMode == 'xs' ){
                setAttributes({
                    xscolPadding : value
                });
            }
        }
        const onChangeAlignH = ( value ) => {
            if( colResponsiveMode == 'xl' ){
                setAttributes({
                    xlalignH : value
                });
            }
            if( colResponsiveMode == 'lg' ){
                setAttributes({
                    lgalignH : value
                });
            }
            if( colResponsiveMode == 'md' ){
                setAttributes({
                    mdalignH : value
                });
            }
            if( colResponsiveMode == 'sm' ){
                setAttributes({
                    smalignH : value
                });
            }
            if( colResponsiveMode == 'xs' ){
                setAttributes({
                    xsalignH : value
                });
            }
        }
        const onChangeAlignV = ( value ) => {
            if( colResponsiveMode == 'xl' ){
                setAttributes({
                    xlalignV : value
                });
            }
            if( colResponsiveMode == 'lg' ){
                setAttributes({
                    lgalignV : value
                });
            }
            if( colResponsiveMode == 'md' ){
                setAttributes({
                    mdalignV : value
                });
            }
            if( colResponsiveMode == 'sm' ){
                setAttributes({
                    smalignV : value
                });
            }
            if( colResponsiveMode == 'xs' ){
                setAttributes({
                    xsalignV : value
                });
            }
        }
        
        const resetColPadding = ( responsiveMode ) => {
            if( responsiveMode == 'xl' ){
                setAttributes({
                    xlcolPadding : 1
                });
            }
            if( responsiveMode == 'lg' ){
                setAttributes({
                    lgcolPadding : 1
                });
            }
            if( responsiveMode == 'md' ){
                setAttributes({
                    mdcolPadding : 1
                });
            }
            if( responsiveMode == 'sm' ){
                setAttributes({
                    smcolPadding : 1
                });
            }
            if( responsiveMode == 'xs' ){
                setAttributes({
                    xscolPadding : 1
                });
            }
        }

        const resetColAlignH = ( responsiveMode ) => {
            if( responsiveMode == 'xl' ){
                setAttributes({
                    xlalignH : 'start'
                });
            }
            if( responsiveMode == 'lg' ){
                setAttributes({
                    lgalignH : 'start'
                });
            }
            if( responsiveMode == 'md' ){
                setAttributes({
                    mdalignH : 'start'
                });
            }
            if( responsiveMode == 'sm' ){
                setAttributes({
                    smalignH : 'start'
                });
            }
            if( responsiveMode == 'xs' ){
                setAttributes({
                    xsalignH : 'start'
                });
            }
        }

        const resetColAlignV = ( responsiveMode ) => {
            if( responsiveMode == 'xl' ){
                setAttributes({
                    xlalignV : 'top'
                });
            }
            if( responsiveMode == 'lg' ){
                setAttributes({
                    lgalignV : 'top'
                });
            }
            if( responsiveMode == 'md' ){
                setAttributes({
                    mdalignV : 'top'
                });
            }
            if( responsiveMode == 'sm' ){
                setAttributes({
                    smalignV : 'top'
                });
            }
            if( responsiveMode == 'xs' ){
                setAttributes({
                    xsalignV : 'top'
                });
            }
        }

        const ALLOWED_BLOCKS = [ 
            'inxperts-gutenberg-blocks/inxperts-navigation', 
            'inxperts-gutenberg-blocks/inxperts-googlemap',
            'inxperts-gutenberg-blocks/inxperts-socialmedia',
            'inxperts-gutenberg-blocks/inxperts-contactinfo',
            'inxperts-gutenberg-blocks/heading',
            'inxperts-gutenberg-blocks/paragraph',
            'inxperts-gutenberg-blocks/inxperts-list',
            'inxperts-gutenberg-blocks/inxperts-image',
            'inxperts-gutenberg-blocks/inxperts-button',
            'inxperts-gutenberg-blocks/inxperts-divider',
            'inxperts-gutenberg-blocks/slider',
            'inxperts-gutenberg-blocks/logoslider',
            'inxperts-gutenberg-blocks/facts',
            'contact-form-7/contact-form-selector'
        ];

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
                        colbgClass: item.slug
                    });
                }    
            });
        }
        const bgclass = (colbgClass) ? `col--bg-${colbgClass}` : '';

        return(
            <>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'Settings', 'inxperts-gutenberg-blocks' ) }
                        initialOpen={ true }
                        >
                            <ToggleGroupControl label="Responsive Mode" className="ix-togglegroup"
                                value={ colResponsiveMode } isBlock 
                                onChange={ (value) => {    
                                    setAttributes( {
                                        colResponsiveMode: value,
                                    } );
                                } }>
                                <ToggleGroupControlOption value="xs" label="XS" showTooltip={ true } aria-label="Extra Small" />
                                <ToggleGroupControlOption value="sm" label="SM" showTooltip={ true } aria-label="Small" />
                                <ToggleGroupControlOption value="md" label="MD" showTooltip={ true } aria-label="Medium" />
                                <ToggleGroupControlOption value="lg" label="LG" showTooltip={ true } aria-label="Large" />
                                <ToggleGroupControlOption value="xl" label="XL" showTooltip={ true } aria-label="Extra Large" />
                            </ToggleGroupControl>
                            {colResponsiveMode && (
                                <div className='col-control'>
                                    {resMode.map((item, index) => {
                                        let hAlign = colSettings[item]['alignH'];
                                        let vAlign = colSettings[item]['alignV'];
                                        let colpadding = colSettings[item]['padding'];
                                        let width = colSettings[item]['width'];
                                        let offset = colSettings[item]['offset'];
                                        return <div className='col-control-wrap' id={`col-${index}`}>
                                            { colResponsiveMode == item ?
                                                <>
                                                <RangeControl
                                                    label={__("Width", "inxperts-gutenberg-blocks")}
                                                    value={ width }
                                                    onChange={ onChangeWidth }
                                                    min={1}
                                                    max={12}
                                                    allowReset={true}
                                                />
                                                <RangeControl
                                                    label={__("Offset", "inxperts-gutenberg-blocks")}
                                                    value={ offset }
                                                    onChange={ onChangeOffset }
                                                    min={0}
                                                    max={12}
                                                    allowReset={true}
                                                />                                                    
                                                <div className='igb--row__settings'> 
                                                    <ToggleGroupControl label="Padding" className="ix-togglegroup"
                                                        value={ colpadding } isBlock 
                                                        onChange={ onChangePadding }>
                                                        <ToggleGroupControlOption value="0" label="0" showTooltip={ true } aria-label="Small" />
                                                        <ToggleGroupControlOption value="1" label="1" showTooltip={ true } aria-label="Medium" />
                                                        <ToggleGroupControlOption value="2" label="2" showTooltip={ true } aria-label="Large" />
                                                        <ToggleGroupControlOption value="3" label="3" showTooltip={ true } aria-label="Extra Large" />
                                                    </ToggleGroupControl>
                                                    <Button
                                                        onClick={() => resetColPadding(colResponsiveMode) }
                                                        label={__( 'Reset', 'inxperts-gitenberg-blocks' )}
                                                        className='components-button components-range-control__reset is-secondary is-small'                                                    
                                                    >{ __( 'Reset', 'inxperts-gutenberg-blocks' ) }</Button>
                                                </div>
                                                <div className='igb--row__settings'> 
                                                    <SelectControl
                                                        label = {__("Alignment - Horizontal", "inxperts-gutenberg-blocks")}
                                                        options = {[
                                                            {
                                                                value: "start",
                                                                label: __("Start", "inxperts-gutenberg-blocks"),
                                                            },
                                                            {
                                                                value: "center",
                                                                label: __("Center", "inxperts-gutenberg-blocks"),
                                                            },
                                                            {
                                                                value: "end",
                                                                label: __("End", "inxperts-gutenberg-blocks"),
                                                            },
                                                        ]}
                                                        value={ hAlign }
                                                        onChange={ onChangeAlignH }
                                                    >
                                                    </SelectControl>
                                                    <Button
                                                        onClick={() => resetColAlignH(colResponsiveMode) }
                                                        label={__( 'Reset', 'inxperts-gitenberg-blocks' )}
                                                        className='components-button components-range-control__reset is-secondary is-small'                                                    
                                                    >{ __( 'Reset', 'inxperts-gutenberg-blocks' ) }</Button>
                                                </div>
                                                <div className='igb--row__settings'>
                                                    <SelectControl
                                                        label = {__("Alignment - Vertical", "inxperts-gutenberg-blocks")}
                                                        options = {[
                                                            {
                                                                value: "top",
                                                                label: __("Top", "inxperts-gutenberg-blocks"),
                                                            },
                                                            {
                                                                value: "middle",
                                                                label: __("Middle", "inxperts-gutenberg-blocks"),
                                                            },
                                                            {
                                                                value: "bottom",
                                                                label: __("Bottom", "inxperts-gutenberg-blocks"),
                                                            },
                                                        ]}
                                                        value={ vAlign }
                                                        onChange={ onChangeAlignV }
                                                    >
                                                    </SelectControl>
                                                    <Button
                                                        onClick={() => resetColAlignV(colResponsiveMode) }
                                                        label={__( 'Reset', 'inxperts-gitenberg-blocks' )}
                                                        className='components-button components-range-control__reset is-secondary is-small'                                                    
                                                    >{ __( 'Reset', 'inxperts-gutenberg-blocks' ) }</Button>
                                                </div>
                                                </>
                                            : <></>
                                            }
                                        </div>
                                    }) }
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
                             <ToggleControl
                                label="Hide on Desktop"
                                checked={ hideonDesktop }
                                onChange={() => setAttributes({
                                    hideonDesktop: !hideonDesktop,
                                })}
                            />

                            <ToggleControl
                                label="Hide on Tablet"
                                checked={ hideonTablet }
                                onChange={() => setAttributes({
                                    hideonTablet: !hideonTablet,
                                })}
                            />

                            <ToggleControl
                                label="Hide on Mobile"
                                checked={ hideonMobile }
                                onChange={() => setAttributes({
                                    hideonMobile: !hideonMobile,
                                })}
                            />
                    </PanelBody>
                </InspectorControls>

                <InnerBlocks 
                allowedBlocks={ ALLOWED_BLOCKS } 
                renderAppender={
                    hasChildBlocks
                        ? undefined
                        : () => <InnerBlocks.ButtonBlockAppender />
                }/>
            </>
        )
    }
}
export default compose(
    withSelect( ( select, props ) => {
        const { clientId } = props;
        const { getBlockOrder } =
            select( 'core/block-editor' ) || select( 'core/editor' ); // Fallback to 'core/editor' for backwards compatibility

        return {
            hasChildBlocks: getBlockOrder( clientId ).length > 0,
        };
    } )
)( Edit );