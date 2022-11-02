/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState, useRef } from '@wordpress/element';
import { PanelBody, SelectControl, __experimentalToggleGroupControl as ToggleGroupControl,
__experimentalToggleGroupControlOption as ToggleGroupControlOption, Popover, ToolbarButton } from '@wordpress/components';
import { InspectorControls, useBlockProps, RichText, __experimentalLinkControl as LinkControl, BlockControls } from '@wordpress/block-editor';
import classnames from "classnames";
import { displayShortcut, isKeyboardEvent } from '@wordpress/keycodes';
import { link, linkOff } from '@wordpress/icons';

 
export default function edit({ setAttributes, attributes, isSelected, onReplace }) {
    const {
        style,
        align,
        width,
        linkTarget,
        rel,
        text,
        url
    } = attributes;  

    const NEW_TAB_REL = 'noreferrer noopener';
    const setButtonText = ( newText ) => {
		// Remove anchor tags from button text content.
		setAttributes( { text: newText.replace( /<\/?a[^>]*>/g, '' ) } );
	}

    function onToggleOpenInNewTab( value ) {
		const newLinkTarget = value ? '_blank' : undefined;

		let updatedRel = rel;
		if ( newLinkTarget && ! rel ) {
			updatedRel = NEW_TAB_REL;
		} else if ( ! newLinkTarget && rel === NEW_TAB_REL ) {
			updatedRel = undefined;
		}

		setAttributes( {
			linkTarget: newLinkTarget,
			rel: updatedRel,
		} );
	}

    function startEditing( event ) {
		event.preventDefault();
		setIsEditingURL( true );
	}

    function unlink() {
		setAttributes( {
			url: undefined,
			linkTarget: undefined,
			rel: undefined,
		} );
		setIsEditingURL( false );
	}

    const ref = useRef();
	const richTextRef = useRef();

	const [ isEditingURL, setIsEditingURL ] = useState( false );
	const isURLSet = !! url;
	const opensInNewTab = linkTarget === '_blank';

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
                                label: __("White/Orange", "inxperts-gutenberg-blocks"),
                            },
                            {
                                value: "two",
                                label: __("Grey/White", "inxperts-gutenberg-blocks"),
                            },
                            {
                                value: "three",
                                label: __("Orange/White", "inxperts-gutenberg-blocks"),
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
                <PanelBody
                    title={ __( 'Settings', 'inxperts-gutenberg-blocks' ) }
                    initialOpen={ true }
                    >
                        <ToggleGroupControl label="Width" className="ix-togglegroup"
                            value={ width } isBlock 
                            onChange={ (value) => {    
                                setAttributes( {
                                    width: value,
                                } );
                            } }>
                            <ToggleGroupControlOption value="in" label="Inline" showTooltip={ true } aria-label="Inline" />
                            <ToggleGroupControlOption value="25" label="1/4" showTooltip={ true } aria-label="1/4" />
                            <ToggleGroupControlOption value="50" label="2/4" showTooltip={ true } aria-label="2/4" />
                            <ToggleGroupControlOption value="75" label="3/4" showTooltip={ true } aria-label="3/4" />
                            <ToggleGroupControlOption value="fl" label="4/4" showTooltip={ true } aria-label="4/4" />
                        </ToggleGroupControl>
                </PanelBody>
            </InspectorControls>
            <BlockControls group="block">
				{ ! isURLSet && (
					<ToolbarButton
						name="link"
						icon={ link }
						title={ __( 'Link' ) }
						shortcut={ displayShortcut.primary( 'k' ) }
						onClick={ startEditing }
					/>
				) }
				{ isURLSet && (
					<ToolbarButton
						name="link"
						icon={ linkOff }
						title={ __( 'Unlink' ) }
						shortcut={ displayShortcut.primaryShift( 'k' ) }
						onClick={ unlink }
						isActive={ true }
					/>
				) }
			</BlockControls>
			{ isSelected && ( isEditingURL || isURLSet ) && (
				<Popover
					position="bottom center"
					onClose={ () => {
						setIsEditingURL( false );
						richTextRef.current?.focus();
					} }
					anchorRef={ ref?.current }
					focusOnMount={ isEditingURL ? 'firstElement' : false }
					__unstableSlotName={ '__unstable-block-tools-after' }
				>
					<LinkControl
						className="wp-block-navigation-link__inline-link-input"
						value={ { url, opensInNewTab } }
						onChange={ ( {
							url: newURL = '',
							opensInNewTab: newOpensInNewTab,
						} ) => {
							setAttributes( { url: newURL } );

							if ( opensInNewTab !== newOpensInNewTab ) {
								onToggleOpenInNewTab( newOpensInNewTab );
							}
						} }
						onRemove={ () => {
							unlink();
							richTextRef.current?.focus();
						} }
						forceIsEditingLink={ isEditingURL }
					/>
				</Popover>
			) }
            <div
				{ ...useBlockProps() }
			>
                <RichText
                    ref={ richTextRef }
                    aria-label={ __( 'Button text' ) }
                    placeholder={ __( 'Add text…' ) }
                    value={ text }
                    onChange={ ( value ) => setButtonText( value ) }
                    withoutInteractiveFormatting
                    className={ classnames(
                        `btn-style-${style} btn-width-${width} btn-al-${align} igb-btn`
                    ) }
                    allowedFormats={ [ '' ] }
                    onReplace={ onReplace }
                    identifier="text"
                />
            </div>
        </>
    );
}