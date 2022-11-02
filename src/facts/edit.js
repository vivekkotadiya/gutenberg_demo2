/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { 
    PanelBody, 
    SelectControl,
    RangeControl 
} from '@wordpress/components';
import { Component } from '@wordpress/element';

import './editor.scss';

export default class Edit extends Component {
    render(){
        const{ 
            attributes: { 
                number, 
                align 
            }, 
            setAttributes 
        } = this.props;

        return(
            <>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'Settings', 'inxperts-gutenberg-blocks' ) }
                        initialOpen={ true }
                        >
                            <RangeControl
                                label={__("Number", "inxperts-gutenberg-blocks")}
                                value={ number }
                                onChange={ ( value ) => setAttributes({
                                    number : value !== undefined ? value : 1
                                }) }
                                min={1}
                                max={50}
                                allowReset={true}
                            />
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
                                value={ align }
                                onChange={ ( value ) => setAttributes({
                                    align : value
                                }) }
                            >
                            </SelectControl>
                    </PanelBody>
                </InspectorControls>
                <div className={`facts--wrap facts--${align}`}>
                    <div className='facts__number'>
                        <h6 className='facts_head'>{number}</h6>
                    </div>
                    <div className='facts__content'>
                        <InnerBlocks className={`facts-innerblocks`}/>
                    </div>
                </div>
            </>           
            
        )
    }
}