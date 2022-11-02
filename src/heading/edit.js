 /**
 * External dependencies
 */

  import classnames from 'classnames';

/**
 * WordPress dependencies
 */
 import { __ } from '@wordpress/i18n';
 import { PanelBody, SelectControl, __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption } from '@wordpress/components';
 import { InspectorControls, useBlockProps, RichText  } from '@wordpress/block-editor';
 import { Platform } from '@wordpress/element';


export default function edit({ setAttributes, attributes}) {
    const { textAlign, style, content, level, placeholder} = attributes;

    const tagName = 'h' + level;

    const headingClass = 'ix_h' + level;

    const onContentChange = ( value ) => {

		const newContent = { content: value };
		setAttributes( newContent );

	};

    const blockClass = classnames(`${textAlign}`, `${style}`, `${headingClass}`); 

    const blockProps = useBlockProps();

 
    return(
        <div {...blockProps}>
            <InspectorControls >
                <PanelBody
                    title={ __( 'Styles', 'inxperts-gutenberg-blocks' ) }
                    initialOpen={ true }
                    >
                    <SelectControl
                        label = {__("Style", "inxperts-gutenberg-blocks")}
                        options = {[
                            {
                                value: "text-grey",
                                label: __("Grey", "inxperts-gutenberg-blocks"),
                            },
                            {
                                value: "text-white",
                                label: __("White", "inxperts-gutenberg-blocks"),
                            },
                            {
                                value: "text-orange",
                                label: __("Orange", "inxperts-gutenberg-blocks"),
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
                    <SelectControl
                        label = {__("Alignment", "inxperts-gutenberg-blocks")}
                        options = {[
                            {
                                value: "text-left",
                                label: __("Left", "inxperts-gutenberg-blocks"),
                            },
                            {
                                value: "text-center",
                                label: __("Center", "inxperts-gutenberg-blocks"),
                            },
                            {
                                value: "text-right",
                                label: __("Right", "inxperts-gutenberg-blocks"),
                            },
                        ]}
                        value={textAlign}
                        onChange={ ( value ) => { 
                            setAttributes( {
                                textAlign: value
                            } );
                        } }
                    >
                    </SelectControl>
                </PanelBody>
                <PanelBody
                    title={ __( 'Settings', 'inxperts-gutenberg-blocks' ) }
                    initialOpen={ true }
                    >
                        <ToggleGroupControl label="Tag" className="ix-togglegroup"
                            value={ level }  
                            onChange={ (value) => {    
                                setAttributes( {
                                    level: Number(value),
                                } );
                            } }>
                            <ToggleGroupControlOption value="1" label="1" showTooltip={ true } aria-label="H1" />
                            <ToggleGroupControlOption value="2" label="2" showTooltip={ true } aria-label="H2" />
                            <ToggleGroupControlOption value="3" label="3" showTooltip={ true } aria-label="H3" />
                            <ToggleGroupControlOption value="4" label="4" showTooltip={ true } aria-label="H4" />
                            <ToggleGroupControlOption value="5" label="5" showTooltip={ true } aria-label="H5" />
                            <ToggleGroupControlOption value="6" label="6" showTooltip={ true } aria-label="H6" />
                        </ToggleGroupControl>
                </PanelBody>
            </InspectorControls> 

            <RichText
				identifier="content"
				tagName={ tagName }
                className= { blockClass }
				value={ content }
				onChange={ onContentChange }
                withoutInteractiveFormatting={true}
				aria-label={ __( 'Heading text' ) }
				placeholder={ placeholder || __( 'Heading' ) }
				{ ...( Platform.isNative && { deleteEnter: true } ) } // setup RichText on native mobile to delete the "Enter" key as it's handled by the JS/RN side
				allowedFormats={ [ '' ] }
			/>
        </div>
    );
 }