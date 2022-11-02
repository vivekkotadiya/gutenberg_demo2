/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	RichText,
	useBlockProps,
    InspectorControls
} from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
    

export default function edit({ setAttributes, attributes, onReplace }) {

    const { align, listStyle, values } = attributes;

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
                                value: "one",
                                label: __("Normal", "inxperts-gutenberg-blocks"),
                            },
                            {
                                value: "two",
                                label: __("Squre", "inxperts-gutenberg-blocks"),
                            },
                            {
                                value: "three",
                                label: __("Number", "inxperts-gutenberg-blocks"),
                            },
                        ]}
                        value={listStyle}
                        onChange={ ( value ) => { 
                            setAttributes( {
                                listStyle: value
                            } );
                        } }
                    >
                    </SelectControl>
                    <SelectControl
                        label = {__("Alignment", "inxperts-gutenberg-blocks")}
                        options = {[
                            {
                                value: "left",
                                label: __("Left", "inxperts-gutenberg-blocks"),
                            },
                            {
                                value: "center",
                                label: __("Center", "inxperts-gutenberg-blocks"),
                            },
                            {
                                value: "right",
                                label: __("Right", "inxperts-gutenberg-blocks"),
                            },
                        ]}
                        value={align}
                        onChange={ ( value ) => { 
                            setAttributes( {
                                align: value
                            } );
                        } }
                    >
                    </SelectControl>
                </PanelBody>
            </InspectorControls>
            <div {...useBlockProps()}>
                <RichText
                    identifier="values"
                    multiline="li"
                    tagName="ul"
                    onChange={ ( nextValues ) =>
                        setAttributes( { values: nextValues } )
                    }
                    value={ values }
                    aria-label={ __( 'List text' ) }
                    placeholder={ __( 'List' ) }
                    onReplace={ onReplace }
                    onRemove={ () => onReplace( [] ) }
                    type="string"
                    allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
                    className = { `ul-style-${listStyle} ul-al-${align} igb-lists` }
                >
                </RichText>
            </div>
		</>
    )
}