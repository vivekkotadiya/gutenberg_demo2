/**
 * WordPress dependencies
 */
 import { __ } from '@wordpress/i18n';
 import { PanelBody, TextControl } from '@wordpress/components';
 import { InspectorControls, useBlockProps } from '@wordpress/block-editor';

 
 export default function edit({ setAttributes, attributes, isSelected }) {
 
    const blockProps = useBlockProps( {
        className:"inxperts-gutenberg-blocks-contactInfo"
    } );
     
    return(
        <>
            <InspectorControls >
                <PanelBody
                        title={ __( 'Settings', 'inxperts-gutenberg-blocks' ) }
                        initialOpen={ true }
                    >
                    <TextControl
                        label={__(
                            "Title",
                            "inxperts-gutenberg-blocks"
                        )}
                        type="text"
                        value={attributes.heading}
                        onChange={(value) => setAttributes({ heading: value })} />
                    <TextControl
                        label={__(
                            "Address",
                            "inxperts-gutenberg-blocks"
                        )}
                        type="text"
                        value={attributes.address}
                        onChange={(value) => setAttributes({ address: value })} />
                    <TextControl
                        label={__(
                            "Telefon",
                            "inxperts-gutenberg-blocks"
                        )}
                        type="text"
                        value={attributes.telefon}
                        onChange={(value) => setAttributes({ telefon: value })} />
                    <TextControl
                        label={__(
                            "Telefon Link",
                            "inxperts-gutenberg-blocks"
                        )}
                        type="text"
                        value={attributes.telefonLink}
                        onChange={(value) => setAttributes({ telefonLink: value })} />
                    <TextControl
                        label={__(
                            "Email",
                            "inxperts-gutenberg-blocks"
                        )}
                        type="text"
                        value={attributes.email}
                        onChange={(value) => setAttributes({ email: value })} />
                    <TextControl
                        label={__(
                            "Email Link",
                            "inxperts-gutenberg-blocks"
                        )}
                        type="text"
                        value={attributes.emailLink}
                        onChange={(value) => setAttributes({ emailLink: value })} />
                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
                <div className='inxperts-contactInfo-wrapper'>
                    <h3 className='inxperts-contact-head'>{attributes.heading}</h3>
                    <div className='inxperts-contactInfo-lists'>
                        <div className='inxperts-contactIndo-list-item'>
                            { attributes.address != '' ? <div className="item-head">Adresse</div> : '' }
                            { attributes.address != '' ? <div className="item-value"> {attributes.address} </div> : '' }
                        </div>
                        <div className='inxperts-contactIndo-list-item'>
                            { attributes.telefon != '' ? <div className="item-head">Telefon</div> : '' }
                            { attributes.telefonLink != '' && attributes.telefon != '' ? 
                                <div className='item-value'>
                                    <a href={attributes.telefonLink}>{ attributes.telefon }</a>
                                </div> : attributes.telefon != '' ? <div className="item-value"> {attributes.telefon} </div> : '' }
                        </div>
                        <div className='inxperts-contactIndo-list-item'>
                            { attributes.email != '' ? <div className="item-head">Email</div> : '' }
                            { attributes.emailLink != '' && attributes.email != '' ? 
                                <div className='item-value'>
                                    <a href={attributes.emailLink}>{ attributes.email }</a>
                                </div> : attributes.email != '' ? <div className="item-value"> {attributes.email} </div> : '' }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
 }