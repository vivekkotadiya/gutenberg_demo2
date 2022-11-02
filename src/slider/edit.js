/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { times, isEqual, isEmpty } from 'lodash';
import { Button, PanelBody, ToggleControl } from '@wordpress/components';
import { Component, Fragment, createContext } from '@wordpress/element';
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import memize from 'memize';

import './editor.scss';

const { jQuery: $ } = window;

const baseClass = 'wp-block-igb-media-text-slider';

/**
* Module Constants
*/
const { Consumer, Provider } = createContext();

const ALLOWED_BLOCKS = [ 'inxperts-gutenberg-blocks/slider-item' ];

const getPanesTemplate = memize( panes => (
	times( panes, index => [ 'inxperts-gutenberg-blocks/slider-item', { slideId: ++index } ] )
) );

class Edit extends Component {
    constructor() {
		super( ...arguments );

		this.changeState = this.changeState.bind( this );
		this.addNewSlide = this.addNewSlide.bind( this );
        this.removeNewSlide = this.removeNewSlide.bind( this );
		this.getState 	 = this.getState   .bind( this );

		this.updateContentAttributes  = this.updateContentAttributes .bind( this );

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

    setInnerBlocksAttributes(callFrom = 'mount', prevProps, prevState) {

		const { select, dispatch } = window.wp.data;

		const { autostart } = this.props.attributes;
		const InnerBlocksProps = {
			attributes: {
				autostart
			}
		};
		
		if ( callFrom == 'Update' ) {
			if ( isEqual(this.props.attributes, prevProps.attributes ) ) {
				
				return;
			}
		}

		const { getBlock } = select( 'core/block-editor' );
		const block = getBlock( this.props.clientId );
		
		let innerBlocksOuter;
		if ( block ) {
			innerBlocksOuter = block.innerBlocks;
		}
		if ( innerBlocksOuter ) {
			if ( innerBlocksOuter.length ) {
				jQuery.each( innerBlocksOuter, (index, item) => {

					if ( ( callFrom == 'Mount' && isEmpty(item.attributes.outerParent)) || callFrom == 'Update' ) {

						//Inner blocks
						dispatch( 'core/block-editor' ).updateBlockAttributes( item.clientId, { outerParent: InnerBlocksProps } );

					}
				} );
			}
		}
	}

	updateContentAttributes(contentBlockId) {

		const { dispatch, select } = window.wp.data;
		const { clientId } = this.props;

		const innerBlocksOuter = select( 'core/block-editor' ).getBlock( clientId ).innerBlocks;
		
		const { autostart } = this.props.attributes;

		const InnerBlocksProps = {
			attributes: {
				autostart
			}
		};
		
		$.each( innerBlocksOuter, (index, item) => {			
			if ( isEqual( contentBlockId, item.innerBlocks[ 0 ].clientId ) ) {
				dispatch( 'core/block-editor' ).updateBlockAttributes( contentBlockId, { innerParent: InnerBlocksProps } );
			}
		} );
	}

    addNewSlide(nextSlide) {

		const { setAttributes } = this.props;
		const { sliderArrays } = this.props.attributes;
        
		const slides = JSON.parse( sliderArrays );
		const { changeState, getState } = this;

		if ( slides.length < nextSlide ) {
			const amount = Math.abs( nextSlide - slides.length );

			times(amount, index => {
				const slideNumber = nextSlide - index;

				slides.push(
					//translators: %d is a counter 1, 2, 3
					sprintf( __( 'Slide %d', 'inxperts-gitenberg-blocks' ), slideNumber )
				);
			});

			setAttributes({
				sliderArrays: JSON.stringify( slides ),
				slideCount: nextSlide
			});
		} else {
			if ( nextSlide - 1 < getState( 'selectedSlide' ) ) {
				changeState( 'selectedSlide', nextSlide - 1 );
				changeState( 'currentSlide', nextSlide );
			}
            
			setAttributes({
				sliderArrays: JSON.stringify( slides.slice( 0, nextSlide ) ),
				slideCount: nextSlide
			});
		}
	}

    removeNewSlide(currentSlide){
        
        const { setAttributes } = this.props;
		const { sliderArrays } = this.props.attributes;
        
		const slides = JSON.parse( sliderArrays );
        
		const { changeState, getState } = this;

		if ( slides.length == currentSlide ) {
			const amount = Math.abs( currentSlide - slides.length );

			times(amount, index => {
				const slideNumber = currentSlide - index;

				slides.push(
					//translators: %d is a counter 1, 2, 3
					sprintf( __( 'Slide %d', 'inxperts-gitenberg-blocks' ), slideNumber )
				);
			});

			setAttributes({
				sliderArrays: JSON.stringify( slides ),
				slideCount: currentSlide
			});
		} else {
			if ( currentSlide - 1 < getState( 'selectedSlide' ) ) {
				changeState( 'selectedSlide', currentSlide - 1 );
				changeState( 'currentSlide', currentSlide );
			}
            
			setAttributes({
				sliderArrays: JSON.stringify( slides.slice( 0, currentSlide ) ),
				slideCount: currentSlide
			});
		}
    }

	componentDidMount() {		
		this.setInnerBlocksAttributes( 'Mount' );
	}

	componentDidUpdate(prevProps, prevState) {
		this.setInnerBlocksAttributes( 'Update', prevProps, prevState );		
	}

    render(){
		
        const { changeState, getState } = this;
		const { slideCount, autostart, sliderArrays, innerItem } = this.props.attributes;
	
		const sliderArraysParsed = JSON.parse( sliderArrays );
		
        const { setAttributes, childInnerBlocks } = this.props;
		
		if ( JSON.stringify( innerItem ) !== JSON.stringify( childInnerBlocks ) ) {
			
			setAttributes( { innerItem : [ ...childInnerBlocks ] } );
		}
		
		const renderEditTitles = index => {
			if ( typeof sliderArraysParsed[ index ] !== 'undefined' ) {
				return (
					<Fragment>
						<li className={`${baseClass}__title-wrapper ${baseClass}__title-wrapper-${ index } ${baseClass}__title-wrapper--${ ( 1 + index === getState( 'currentSlide' ) ? 'active' : 'inactive' )}`}>
							<span className={ `${baseClass}__title ${baseClass}__title-${ 1 + index }` } onClick={ () => {
									changeState( 'currentSlide' , 1 + index );
									changeState( 'selectedSlide', index     );
								}
							}>{ sliderArraysParsed[ index ] ? typeof sliderArraysParsed[ index ].text !== 'undefined' ? sliderArraysParsed[ index ].text : sliderArraysParsed[ index ] : __( 'Slide', 'inxperts-gitenberg-blocks' ) }</span>
						</li>
					</Fragment>
				);
			}
		};

        const { addNewSlide, removeNewSlide } = this;

		const { select } = window.wp.data;
		const { getBlock } = select( 'core/block-editor' );
		const block = getBlock( this.props.clientId );

		const sliderClass = ( autostart == true ) ? ' igb__slider_autoplay' : '';

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
                    </PanelBody>
                </InspectorControls>
				<ul className={`${baseClass}__titles`}>
					<Fragment>
						{times( slideCount, index => renderEditTitles( index ) )}
						<li className={`${baseClass}__add-item`}>
							<Button
								icon='insert'
								onClick={() => addNewSlide( slideCount + 1 )}
								label={__( 'Add Item', 'inxperts-gitenberg-blocks' )}
							/>
							<Button
								icon='dismiss'
								onClick={() => removeNewSlide( slideCount - 1 )}
								label={__( 'Remove Item', 'inxperts-gitenberg-blocks' )}
							/>
						</li>
					</Fragment>
				</ul>
                <div className={classnames(
						`${baseClass} igb-slider${sliderClass} ${baseClass}--current-slide-${getState( 'currentSlide' )}`
					)} data-autoplay={autostart}>
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
					{ block && (
						<ul className='slider_navigation glide__bullets' data-glide-el="controls[nav]">
							{block.innerBlocks.map((item, index) => {
								let i = '=' + index;
								return(
									<li className='slide_nav glide__bullet' data-glide-dir={i}>
										{item.attributes.igbNav}
									</li>
								);
							} )}
						</ul>
					)}
				</div>
            </Fragment>
        )
    }
}
export default compose( 
	withSelect( ( select, props ) => {
		const { getBlocks } = select( 'core/block-editor' );
				
		return {
			childInnerBlocks : getBlocks( props.clientId ),
		};
	}),
)( Edit );

export { Consumer };