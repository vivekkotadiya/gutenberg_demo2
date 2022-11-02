/**
 * WordPress dependencies
 */
 import { __ } from '@wordpress/i18n';
 import { PanelBody, SelectControl, __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption } from '@wordpress/components';
 import { InspectorControls, useBlockProps } from '@wordpress/block-editor';

 
export default function edit({ setAttributes, attributes, isSelected }) {
    const {
        style,
        paddingTop,
        paddingBottom
    } = attributes;  
    return(
        <>
            <InspectorControls >
                <PanelBody
                    title={ __( 'Styles', 'inxperts-gutenberg-blocks' ) }
                    initialOpen={ true }
                    >
                    <SelectControl
                        label = {__("Style", "inxperts-gutenberg-blocks")}
                        options = {[
                            {
                                value: "light-grey",
                                label: __("Line - light grey", "inxperts-gutenberg-blocks"),
                            },
                            {
                                value: "dark-grey",
                                label: __("Line - black", "inxperts-gutenberg-blocks"),
                            },
                            {
                                value: "orange",
                                label: __("Line - orange", "inxperts-gutenberg-blocks"),
                            },
                        ]}
                        value={style}
                        onChange={ ( value ) => { 
                            setAttributes( {
                                style: value
                            } );
                        } }
                    >
                    </SelectControl>
                </PanelBody>
                <PanelBody
                    title={ __( 'Settings', 'inxperts-gutenberg-blocks' ) }
                    initialOpen={ true }
                    >
                        <ToggleGroupControl label="Padding Top" className="ix-togglegroup"
                            value={ paddingTop } isBlock 
                            onChange={ (value) => {    
                                setAttributes( {
                                    paddingTop: value,
                                } );
                            } }>
                            <ToggleGroupControlOption value="s" label="S" showTooltip={ true } aria-label="Small" />
                            <ToggleGroupControlOption value="m" label="M" showTooltip={ true } aria-label="Medium" />
                            <ToggleGroupControlOption value="l" label="L" showTooltip={ true } aria-label="Large" />
                            <ToggleGroupControlOption value="xl" label="Xl" showTooltip={ true } aria-label="Extra Large" />
                        </ToggleGroupControl>
                        <ToggleGroupControl label="Padding Bottom" className="ix-togglegroup"
                            value={ paddingBottom } isBlock 
                            onChange={ (value) => {    
                                setAttributes( {
                                    paddingBottom: value,
                                } );
                            } }>
                            <ToggleGroupControlOption value="s" label="S" showTooltip={ true } aria-label="Small" />
                            <ToggleGroupControlOption value="m" label="M" showTooltip={ true } aria-label="Medium" />
                            <ToggleGroupControlOption value="l" label="L" showTooltip={ true } aria-label="Large" />
                            <ToggleGroupControlOption value="xl" label="XL" showTooltip={ true } aria-label="Extra Large" />
                        </ToggleGroupControl>
                </PanelBody>
            </InspectorControls>
            <div {...useBlockProps()}>
                <div class={`dv-top-${paddingTop} dv-bottom-${paddingBottom}`}>
                    <hr class={`${style}`} />
                </div>
            </div>
        </>
    );
}