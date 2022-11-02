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
    const { textAlign, style, content, tag, placeholder} = attributes;

    const onContentChange = ( value ) => {

		const newContent = { content: value };
		setAttributes( newContent );

	};

    const tagName = tag;

    const blockClass = classnames(`${textAlign}`, `${style}`); 

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
                            value={ tag }  
                            onChange={ (value) => {    
                                setAttributes( {
                                    tag: value,
                                } );
                            } }>
                            <ToggleGroupControlOption value="p" label="P" showTooltip={ true } aria-label="P" />
                            <ToggleGroupControlOption value="span" label="SPAN" showTooltip={ true } aria-label="SPAN" />
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
				aria-label={ __( 'Paragraph text' ) }
				placeholder={ placeholder || __( 'Add text here...' ) }
				{ ...( Platform.isNative && { deleteEnter: true } ) } // setup RichText on native mobile to delete the "Enter" key as it's handled by the JS/RN side
				allowedFormats={ [ '' ] }
			/>
        </div>
    );
 }