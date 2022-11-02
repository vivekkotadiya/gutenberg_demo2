/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { 
    PanelBody, 
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption, 
    ToggleControl,
    SelectControl,
    Button
} from '@wordpress/components';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import classnames from "classnames";

import rowClasses from "./rowClasses";
 
 
class Edit extends Component {
    render(){
        const {
            attributes: {
                rowResponsiveMode,
                xlAlignH,
                lgAlignH,
                mdAlignH,
                smAlignH,
                xsAlignH,
                xlAlignV,
                lgAlignV,
                mdAlignV,
                smAlignV,
                xsAlignV,
                xlReverseCol,
                lgReverseCol,
                mdReverseCol,
                smReverseCol,
                xsReverseCol,
                colheight,
                contentwidth,
                colgap
             },
             hasChildBlocks,
             attributes,
             setAttributes
        } = this.props;
 
        const resMode = ['xs', 'sm', 'md', 'lg', 'xl'];
 
        const rowSettings = {   
            'xs': {
                'alignH' : xsAlignH,
                'alignV' : xsAlignV
            },
            'sm': {
                'alignH' : smAlignH,
                'alignV' : smAlignV
            },
            'md': {
                'alignH' : mdAlignH,
                'alignV' : mdAlignV
            },
            'lg': {
                'alignH' : lgAlignH,
                'alignV' : lgAlignV
            },
            'xl': {
                'alignH' : xlAlignH,
                'alignV' : xlAlignV
            },
        };
 
        const updateHAlign = ( value ) => {
            if( rowResponsiveMode == 'xl' ){
                setAttributes( {
                    xlAlignH: value
                } );
            }
            if( rowResponsiveMode == 'lg' ){
                setAttributes( {
                    lgAlignH: value
                } );
            }
            if( rowResponsiveMode == 'md' ){
                setAttributes( {
                    mdAlignH: value               
                } );
            }
            if( rowResponsiveMode == 'sm' ){
                setAttributes( {
                    smAlignH: value
                } );
            }
            if( rowResponsiveMode == 'xs' ){
                setAttributes( {
                    xsAlignH: value
                } );
            }
        }
        const updateVAlign = ( value ) => {
            if( rowResponsiveMode == 'xl' ){
                setAttributes( {
                    xlAlignV: value
                } );
            }
            if( rowResponsiveMode == 'lg' ){
                setAttributes( {
                    lgAlignV: value
                } );
            }
            if( rowResponsiveMode == 'md' ){
                setAttributes( {
                    mdAlignV: value               
                } );
            }
            if( rowResponsiveMode == 'sm' ){
                setAttributes( {
                    smAlignV: value
                } );
            }
            if( rowResponsiveMode == 'xs' ){
                setAttributes( {
                    xsAlignV: value
                } );
            }
        }

        const resetHAlignment = ( responsiveMode ) => {
            if( responsiveMode == 'xl' ){
                setAttributes( {
                    xlAlignH: 'start'
                } );
            }
            if( responsiveMode == 'lg' ){
                setAttributes( {
                    lgAlignH: 'start'
                } );
            }
            if( responsiveMode == 'md' ){
                setAttributes( {
                    mdAlignH: 'start'
                } );
            }
            if( responsiveMode == 'sm' ){
                setAttributes( {
                    smAlignH: 'start'
                } );
            }
            if( responsiveMode == 'xs' ){
                setAttributes( {
                    xsAlignH: 'start'
                } );
            }
        }

        const resetVAlignment = ( responsiveMode ) => {
            if( responsiveMode == 'xl' ){
                setAttributes( {
                    xlAlignV: 'top'
                } );
            }
            if( responsiveMode == 'lg' ){
                setAttributes( {
                    lgAlignV: 'top'
                } );
            }
            if( responsiveMode == 'md' ){
                setAttributes( {
                    mdAlignV: 'top'
                } );
            }
            if( responsiveMode == 'sm' ){
                setAttributes( {
                    smAlignV: 'top'
                } );
            }
            if( responsiveMode == 'xs' ){
                setAttributes( {
                    xsAlignV: 'top'
                } );
            }
        }
        
        const ALLOWED_BLOCKS = [ 'inxperts-gutenberg-blocks/inxperts-column' ];
 
        return(
            <Fragment>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'Settings', 'inxperts-gutenberg-blocks' ) }
                        initialOpen={ true }
                        >
                            <ToggleGroupControl label="Responsive Mode" className="ix-togglegroup"
                                value={ rowResponsiveMode } isBlock 
                                onChange={ (value) => {    
                                    setAttributes( {
                                        rowResponsiveMode: value,
                                    } );
                                } }>
                                <ToggleGroupControlOption value="xs" label="XS" showTooltip={ true } aria-label="Extra Small" />
                                <ToggleGroupControlOption value="sm" label="SM" showTooltip={ true } aria-label="Small" />
                                <ToggleGroupControlOption value="md" label="MD" showTooltip={ true } aria-label="Medium" />
                                <ToggleGroupControlOption value="lg" label="LG" showTooltip={ true } aria-label="Large" />
                                <ToggleGroupControlOption value="xl" label="XL" showTooltip={ true } aria-label="Extra Large" />
                            </ToggleGroupControl>
                            { rowResponsiveMode && (
                                <div className='row-control'>
                                    {resMode.map((item, index) => {
                                        let horizontalAlign = rowSettings[item]['alignH'];
                                        let verticalAlign = rowSettings[item]['alignV'];
                                        return <div className='row-control-wrap' id={`row-${index}`}>
                                            { rowResponsiveMode == item ?
                                                <>
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
                                                            value={horizontalAlign}
                                                            onChange={ updateHAlign }
                                                        >
                                                        </SelectControl>
                                                        <Button
                                                            onClick={() => resetHAlignment(rowResponsiveMode)}
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
                                                            value={ verticalAlign }
                                                            onChange={ updateVAlign }
                                                        >
                                                        </SelectControl>
                                                        <Button
                                                            onClick={() => resetVAlignment(rowResponsiveMode)}
                                                            label={__( 'Reset', 'inxperts-gitenberg-blocks' )}
                                                            className='components-button components-range-control__reset is-secondary is-small'                                                    
                                                        >{ __( 'Reset', 'inxperts-gutenberg-blocks' ) }</Button>
                                                    </div>
                                                </>
                                            : <></>
                                            }
                                        </div>
                                    })}
                                </div>
                            ) }
                            <label className='igb--label'>Column - Order</label>
                            <div className='igb--row__settings'>                            
                                { rowResponsiveMode == 'xl' && (
                                    <>
                                        <ToggleControl
                                            label="Reverse Columns"
                                            checked={ xlReverseCol }
                                            onChange={ () => setAttributes({
                                                xlReverseCol : !xlReverseCol
                                            }) }
                                        />
                                        <Button
                                            onClick={() => setAttributes({
                                                xlReverseCol : false
                                            })}
                                            label={__( 'Reset', 'inxperts-gitenberg-blocks' )}
                                            className='components-button components-range-control__reset is-secondary is-small'                                                    
                                        >{ __( 'Reset', 'inxperts-gutenberg-blocks' ) }</Button>
                                    </>
                                )}
                                { rowResponsiveMode == 'lg' && (
                                    <>
                                        <ToggleControl
                                            label="Reverse Columns"
                                            checked={ lgReverseCol }
                                            onChange={ () => setAttributes({
                                                lgReverseCol : !lgReverseCol
                                            }) }
                                        />
                                        <Button
                                            onClick={() => setAttributes({
                                                lgReverseCol : false
                                            })}
                                            label={__( 'Reset', 'inxperts-gitenberg-blocks' )}
                                            className='components-button components-range-control__reset is-secondary is-small'                                                    
                                        >{ __( 'Reset', 'inxperts-gutenberg-blocks' ) }</Button>
                                    </>
                                )}
                                { rowResponsiveMode == 'md' && (
                                    <>
                                        <ToggleControl
                                            label="Reverse Columns"
                                            checked={ mdReverseCol }
                                            onChange={ () => setAttributes({
                                                mdReverseCol : !mdReverseCol
                                            }) }
                                        />
                                        <Button
                                            onClick={() => setAttributes({
                                                mdReverseCol : false
                                            })}
                                            label={__( 'Reset', 'inxperts-gitenberg-blocks' )}
                                            className='components-button components-range-control__reset is-secondary is-small'                                                    
                                        >{ __( 'Reset', 'inxperts-gutenberg-blocks' ) }</Button>
                                    </>
                                )}
                                { rowResponsiveMode == 'sm' && (
                                    <>
                                        <ToggleControl
                                            label="Reverse Columns"
                                            checked={ smReverseCol }
                                            onChange={ () => setAttributes({
                                                smReverseCol : !smReverseCol
                                            }) }
                                        />
                                        <Button
                                            onClick={() => setAttributes({
                                                smReverseCol : false
                                            })}
                                            label={__( 'Reset', 'inxperts-gitenberg-blocks' )}
                                            className='components-button components-range-control__reset is-secondary is-small'                                                    
                                        >{ __( 'Reset', 'inxperts-gutenberg-blocks' ) }</Button>
                                    </>
                                )}
                                { rowResponsiveMode == 'xs' && (
                                    <>
                                        <ToggleControl
                                            label="Reverse Columns"
                                            checked={ xsReverseCol }
                                            onChange={ () => setAttributes({
                                                xsReverseCol : !xsReverseCol
                                            }) }
                                        />
                                        <Button
                                            onClick={() => setAttributes({
                                                xsReverseCol : false
                                            })}
                                            label={__( 'Reset', 'inxperts-gitenberg-blocks' )}
                                            className='components-button components-range-control__reset is-secondary is-small'                                                    
                                        >{ __( 'Reset', 'inxperts-gutenberg-blocks' ) }</Button>
                                    </>
                                )}
                            </div>
                            <label className='igb--label'>Column - Height</label>
                            <ToggleControl
                                label="Same Height"
                                checked={ colheight }
                                onChange={ () => setAttributes({
                                    colheight : !colheight
                                }) }
                            />
                            <label className='igb--label'>Content - Width</label>
                            <ToggleControl
                                label="Limited Width"
                                checked={ contentwidth }
                                onChange={ () => setAttributes({
                                    contentwidth : !contentwidth
                                }) }
                            />
                            <ToggleGroupControl label="Column Gap" className="ix-togglegroup"
                                value={ colgap } isBlock 
                                onChange={ (value) => {    
                                    setAttributes( {
                                        colgap: value,
                                    } );
                                } }>
                                <ToggleGroupControlOption value="0" label="0" showTooltip={ true } aria-label="Small" />
                                <ToggleGroupControlOption value="1" label="1" showTooltip={ true } aria-label="Medium" />
                                <ToggleGroupControlOption value="2" label="2" showTooltip={ true } aria-label="Large" />
                                <ToggleGroupControlOption value="3" label="3" showTooltip={ true } aria-label="Extra Large" />
                            </ToggleGroupControl>
                    </PanelBody>
                </InspectorControls>

                <div className={classnames(
                        `row`,
                        ...rowClasses(attributes)
                    )}>
                    <InnerBlocks
                        allowedBlocks={ ALLOWED_BLOCKS } 
                        renderAppender={
                            hasChildBlocks
                                ? undefined
                                : () => <InnerBlocks.ButtonBlockAppender />
                        }
                    />
                </div>
            </Fragment>
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