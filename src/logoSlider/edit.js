/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { times, isEqual } from 'lodash';
import { Button, PanelBody, ToggleControl, 
	 __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption, RangeControl } from '@wordpress/components';
import { Component, Fragment, createContext } from '@wordpress/element';
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import memize from 'memize';

import './editor.scss';

const { jQuery: $ } = window;
const baseClass = 'wp-block-igb-logo-slider';

/**
* Module Constants
*/
const { Consumer, Provider } = createContext();

const ALLOWED_BLOCKS = [ 'inxperts-gutenberg-blocks/logoslideritem' ];

const getPanesTemplate = memize( panes => (
	times( panes, index => [ 'inxperts-gutenberg-blocks/logoslideritem', { slideId: ++index } ] )
) );



export default class Edit extends Component {
    constructor() {
		super( ...arguments );

		this.changeState = this.changeState.bind( this );
		this.addNewSlide = this.addNewSlide.bind( this );
        this.removeNewSlide = this.removeNewSlide.bind( this );
		this.getState 	 = this.getState   .bind( this );

		this.updateLogoSliderContentAttributes  = this.updateLogoSliderContentAttributes .bind( this );

		this.state = {
			currentSlide: 1,
			selectedSlide: 0,
			isLockedPaddings: false
		};
	}

    changeState (param, value) {
		this.setState( { [ param ]: value } );
	}

	getState (value) {
		return this.state[ value ];
	}

	updateLogoSliderContentAttributes(contentBlockId) {

		const { dispatch, select } = window.wp.data;
		const { clientId } = this.props;

		const innerBlocksOuter = select( 'core/block-editor' ).getBlock( clientId ).innerBlocks;
		
		const { 
			autostart,  
			navigationArrow, 
			SliderResponsiveMode, 
			xlDisplayItem,
			lgDisplayItem,
			mdDisplayItem,
			smDisplayItem,
			xsDisplayItem
		} = this.props.attributes;

		const InnerBlocksProps = {
			attributes: {
				autostart, 
				navigationArrow, 
				SliderResponsiveMode, 
				xlDisplayItem,
				lgDisplayItem,
				mdDisplayItem,
				smDisplayItem,
				xsDisplayItem
			}
		};
		
		$.each( innerBlocksOuter, (index, item) => {			
			if ( isEqual( contentBlockId, item.innerBlocks[ 0 ].clientId ) ) {
				dispatch( 'core/block-editor' ).updateBlockAttributes( contentBlockId, { innerParent: InnerBlocksProps } );
			}
		} );
	}

    addNewSlide = (nextSlide) => {

		const { sliderArrays } = this.props.attributes;
        
		const slides = JSON.parse( sliderArrays );
		const { changeState, getState } = this;
		
		if ( slides.length < nextSlide ) {
			const amount = Math.abs( nextSlide - slides.length );
			
			times(amount, index => {
				const slideNumber = nextSlide - index;
				slides.push(
					//translators: %d is a counter 1, 2, 3
					sprintf( __( 'Logo Slide %d', 'inxperts-gitenberg-blocks' ), slideNumber )
				);
				
			});
			
			this.props.setAttributes({
				sliderArrays: JSON.stringify( slides ),
				slideCount: nextSlide
			});
			
		} else {

			if ( nextSlide - 1 < getState( 'selectedSlide' ) ) {
				changeState( 'selectedSlide', nextSlide - 1 );
				changeState( 'currentSlide', nextSlide );
			}
            
			this.props.setAttributes({
				sliderArrays: JSON.stringify( slides.slice( 0, nextSlide ) ),
				slideCount: nextSlide
			});

		}
	}

    removeNewSlide = (currentSlide) =>{
        
		const { sliderArrays } = this.props.attributes;
        
		const slides = JSON.parse( sliderArrays );
        
		const { changeState, getState } = this;

		if ( slides.length == currentSlide ) {

			const amount = Math.abs( currentSlide - slides.length );

			times(amount, index => {
				const slideNumber = currentSlide - index;

				slides.push(
					//translators: %d is a counter 1, 2, 3
					sprintf( __( 'Logo Slide %d', 'inxperts-gitenberg-blocks' ), slideNumber )
				);
			});

			this.props.setAttributes({
				sliderArrays: JSON.stringify( slides ),
				slideCount: currentSlide
			});

		} else {

			if ( currentSlide - 1 < getState( 'selectedSlide' ) ) {
				changeState( 'selectedSlide', currentSlide - 1 );
				changeState( 'currentSlide', currentSlide );
			}
            
			this.props.setAttributes({
				sliderArrays: JSON.stringify( slides.slice( 0, currentSlide ) ),
				slideCount: currentSlide
			});
			
		}
    }

    render(){
		
        const { changeState, getState } = this;
		const { 
			slideCount, 
			autostart, 
			sliderArrays, 
			navigationArrow, 
			SliderResponsiveMode, 
			xlDisplayItem,
			lgDisplayItem,
			mdDisplayItem,
			smDisplayItem,
			xsDisplayItem
		} = this.props.attributes;
	
		const sliderArraysParsed = JSON.parse( sliderArrays );
		
        const { setAttributes } = this.props;
		
		let xlAttr = 0, lgAttr = 0, mdAttr = 0, smAttr = 0, xsAttr = 0;
		if( xlDisplayItem == lgDisplayItem && lgDisplayItem == mdDisplayItem && mdDisplayItem == smDisplayItem && smDisplayItem == xsDisplayItem ){
			xsAttr += xsDisplayItem;
		}else if ( xlDisplayItem == lgDisplayItem && lgDisplayItem == mdDisplayItem && mdDisplayItem == smDisplayItem ){
			xsAttr += xsDisplayItem;
			smAttr += smDisplayItem;
		}else if ( xlDisplayItem == lgDisplayItem && lgDisplayItem == mdDisplayItem ){
			xsAttr += xsDisplayItem;
			smAttr += smDisplayItem;
			mdAttr += mdDisplayItem;
		}else if ( xlDisplayItem == lgDisplayItem ){
			xsAttr += xsDisplayItem;
			smAttr += smDisplayItem;
			mdAttr += mdDisplayItem;
			lgAttr += lgDisplayItem;
		}else{
			xsAttr += xsDisplayItem;
			smAttr += smDisplayItem;
			mdAttr += mdDisplayItem;
			lgAttr += lgDisplayItem;
			xlAttr += xlDisplayItem;
		}
		
		const renderEditTitles = index => {
			if ( typeof sliderArraysParsed[ index ] !== 'undefined' ) {
				return (
					<Fragment>
						<li className={`${baseClass}__title-wrapper ${baseClass}__title-wrapper-${ index } ${baseClass}__title-wrapper--${ ( 1 + index === getState( 'currentSlide' ) ? 'active' : 'inactive' )}`}>
							<span className={ `${baseClass}__title ${baseClass}__title-${ 1 + index }` } onClick={ () => {
									changeState( 'currentSlide' , 1 + index );
									changeState( 'selectedSlide', index );
								}
							}>{ sliderArraysParsed[ index ] ? sliderArraysParsed[ index ] : __( 'Logo Slide', 'inxperts-gitenberg-blocks' ) }</span>
						</li>
					</Fragment>
				);
			}
		};

        return(
            <Fragment>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'Settings', 'inxperts-gutenberg-blocks' ) }
                        initialOpen={ true }
                        >
                            <ToggleControl
                                label="Autostart"
                                checked={ autostart }
                                onChange={() => setAttributes({
                                    autostart: !autostart,
                                })}
                            />
							<ToggleControl
                                label="Show navigation arrows"
                                checked={ navigationArrow }
                                onChange={() => setAttributes({
                                    navigationArrow: !navigationArrow,
                                })}
                            />
							<ToggleGroupControl label="Responsive Mode" className="ix-togglegroup"
                                value={ SliderResponsiveMode } isBlock 
                                onChange={ (value) => {    
                                    setAttributes( {
                                        SliderResponsiveMode: value,
                                    } );
                                } }>
                                <ToggleGroupControlOption value="xl" label="XL" showTooltip={ true } aria-label="Extra Large" />
                                <ToggleGroupControlOption value="lg" label="LG" showTooltip={ true } aria-label="Large" />
                                <ToggleGroupControlOption value="md" label="MD" showTooltip={ true } aria-label="Medium" />
                                <ToggleGroupControlOption value="sm" label="SM" showTooltip={ true } aria-label="Small" />
                                <ToggleGroupControlOption value="xs" label="XS" showTooltip={ true } aria-label="Extra Small" />
                            </ToggleGroupControl>
                            { SliderResponsiveMode == 'xl' && (
                                <RangeControl
									label={__("Displayed items", "inxperts-gutenberg-blocks")}
									value={ xlDisplayItem }
									onChange={ () => setAttributes({ xlDisplayItem: value !== undefined ? value : 3 }) }
									min={1}
									max={12}
								/>
                            )}
							{ SliderResponsiveMode == 'lg' && (
                                <RangeControl
									label={__("Displayed items", "inxperts-gutenberg-blocks")}
									value={ lgDisplayItem }
									onChange={ () => setAttributes({ lgDisplayItem: value !== undefined ? value : 3 }) }
									min={1}
									max={12}
								/>
                            )}
							{ SliderResponsiveMode == 'md' && (
                                <RangeControl
									label={__("Displayed items", "inxperts-gutenberg-blocks")}
									value={ mdDisplayItem }
									onChange={ () => setAttributes({ mdDisplayItem: value !== undefined ? value : 3 }) }
									min={1}
									max={12}
								/>
                            )}
							{ SliderResponsiveMode == 'sm' && (
                                <RangeControl
									label={__("Displayed items", "inxperts-gutenberg-blocks")}
									value={ smDisplayItem }
									onChange={ () => setAttributes({ smDisplayItem: value !== undefined ? value : 2 }) }
									min={1}
									max={12}
								/>
                            )}
							{ SliderResponsiveMode == 'xs' && (
                                <RangeControl
									label={__("Displayed items", "inxperts-gutenberg-blocks")}
									value={ xsDisplayItem }
									onChange={ () => setAttributes({ xsDisplayItem: value !== undefined ? value : 1 }) }
									min={1}
									max={12}
								/>
                            )}
                    </PanelBody>
                </InspectorControls>
				<ul className={`${baseClass}__titles`}>
					<Fragment>
						{times( slideCount, index => renderEditTitles( index ) )}
						<li className={`${baseClass}__add-item`}>
							<Button
								icon='insert'
								onClick={() => this.addNewSlide( slideCount + 1 )}
								label={__( 'Add Item', 'inxperts-gitenberg-blocks' )}
							/>
							<Button
								icon='dismiss'
								onClick={() => this.removeNewSlide( slideCount - 1 )}
								label={__( 'Remove Item', 'inxperts-gitenberg-blocks' )}
							/>
						</li>
					</Fragment>
				</ul>
				<div className={`${baseClass}__igb-logo-slider_container`}>
					<div className={classnames(
							`${baseClass} igb-logo-slider ${baseClass}--current-slide-${getState( 'currentSlide' )}`
						)} data-autoplay={autostart} data-navigation={navigationArrow} {...(xsAttr != 0 && { 'data-xs': xsAttr } ) } {...(smAttr != 0 && { 'data-sm': smAttr } ) } {...(mdAttr != 0 && { 'data-md': mdAttr } ) } {...(lgAttr != 0 && { 'data-lg': lgAttr } ) } {...(xlAttr != 0 && { 'data-xl': xlAttr } ) }>
						<div className={`${baseClass}__content glide__track`} data-glide-el="track">
							<div className='glide__slides'>
								<Provider value={this}>
									<InnerBlocks
										template={getPanesTemplate( slideCount )}
										templateLock='all'
										templateInsertUpdatesSelection={true}
										allowedBlocks={ALLOWED_BLOCKS}
									/>
								</Provider>
							</div>
						</div>
						<div data-glide-el="controls" className='logo-slider-controls'>
							<button data-glide-dir="<<" className='prev-slide'>
								<svg xmlns="http://www.w3.org/2000/svg" width="7.707" height="14.707" viewBox="0 0 7.707 14.707">
									<g id="Group_475" data-name="Group 475" transform="translate(9265.854 8669.854)">
										<line id="Line_29" data-name="Line 29" x1="7" y2="7" transform="translate(-9265.5 -8669.5)" fill="none" stroke="#fff" stroke-width="1"/>
										<line id="Line_30" data-name="Line 30" x1="7" y1="7" transform="translate(-9265.5 -8662.5)" fill="none" stroke="#fff" stroke-width="1"/>
									</g>
								</svg>
							</button>
							<button data-glide-dir=">>" className='next-slide'>
								<svg xmlns="http://www.w3.org/2000/svg" width="7.707" height="14.707" viewBox="0 0 7.707 14.707">
									<g id="Group_475" data-name="Group 475" transform="translate(9265.854 8669.854)">
										<line id="Line_29" data-name="Line 29" x1="7" y2="7" transform="translate(-9265.5 -8669.5)" fill="none" stroke="#fff" stroke-width="1"/>
										<line id="Line_30" data-name="Line 30" x1="7" y1="7" transform="translate(-9265.5 -8662.5)" fill="none" stroke="#fff" stroke-width="1"/>
									</g>
								</svg>
							</button>
						</div>
					</div>
				</div>
            </Fragment>
        )
    }
}

export { Consumer };