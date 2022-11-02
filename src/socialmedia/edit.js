/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { TextControl, Popover, ToggleControl, Button, BaseControl } from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';
const {jQuery: $} = window;


/**
 * Internal dependencies
 */
import classnames from 'classnames';
import './editor.scss';
import IconRender from "../Icons/IconRender";
import IGBIcons from "../Icons/IGBIcons.json";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";


let IGBicons = Object.keys(IGBIcons);


/**
* Module Constants
*/
const baseClass = 'wp-block-inxperts-social-links';

/**
 * Executes the edit container
 * @param {Object} props from editor
 * @return {Node} rendered edit component
 * @constructor
 */
 export const ContainerEdit = ( props ) => {
    const styles = {};
    return (
        <div
            className={ `${ props.className } ` }
            style={ { ...styles, ...props.style } }
        >
            { props.children }
        </div>
    );
};

/**
 * @param {Object} props - attributes
 * @returns {Node} rendered component
 */
 export default class Edit extends Component {
	constructor(props) {
		super(...arguments);

		this.updateArrValues = this.updateArrValues.bind(this);

		this.onDeleteIcon = this.onDeleteIcon.bind(this);
		this.insertIcon = this.insertIcon.bind(this);		
		this.onSelectIcon = this.onSelectIcon.bind(this);
		this.activateIcon = this.activateIcon.bind(this);
		this.onAddIcon = this.onAddIcon.bind(this);

		this.icon_render = this.icon_render.bind(this);
		this.renderIconSettings = this.renderIconSettings.bind(this);
		this.icon_block = this.icon_block.bind(this);

		this.state = {
			selectedIcon: undefined,
			openPopUp: false,
		};

	}

	updateArrValues ( value, index ) {

		//Recursive iterate object value
		const deepMap = (obj, cb) => {
			var out = {};

			Object.keys(obj)
		  	.forEach(function (k) {
		      var val;
		      if (obj[k] !== null && typeof obj[k] === 'object') {
		        val = deepMap(obj[k], cb);
		      } else {
		        val = cb(obj[k], k);
		      }

		      out[k] = val;
		    });

		  return out;
		}

		//Replace undefined to ''
		value = deepMap(value, function (v, k) {
			if (typeof v == 'undefined'){
				v = '';
			}
			return v;
		});

		const { attributes, setAttributes } = this.props;
		const { icons } = attributes;

		const newItems = icons.map( ( item, thisIndex ) => {
			if ( index === thisIndex ) {
				item = {
					...item,
					...value
				};
				// item = merge(item, value);
			}
			return item;
		} );
		
		setAttributes( {
			icons: newItems,
		} );
		
	};

	renderIconSettings( index ) {
		const {
			attributes: {
				icons,
			},
		} = this.props;

		const updateArrValues = this.updateArrValues;
		const NEW_TAB_REL = 'noreferrer noopener';

        const block_icon_props = {
            icons: IGBicons,
            value: icons[index].icon,
            onChange: (value) => {
                updateArrValues( { icon: value }, index );
            },
            isMulti: false,
            renderFunc: IconRender,
            noSelectedPlaceholder: __(
                "Select Icon",
                "inxperts-gutenberg-blocks"
            ),
        };

		if (typeof icons[ index ] !== 'undefined') {
			return (
				<Fragment>
					<div class="wp-block-inxperts-social-link__popover-close">
						<Button
							icon="no-alt"
							className="alignright"
							onClick={(e)=>{
								e.preventDefault();
								e.stopPropagation();
								this.setState({openPopUp: false});
							}}
						/>
                        <Button
                            icon="minus"
							className="alignright"
							onClick={(e)=>{
								e.preventDefault();
								e.stopPropagation();
								this.onDeleteIcon();
							}} />
					</div>
					<BaseControl
						label={__('Icon', 'inxperts-gutenberg-blo')}
					>
						<FontIconPicker {...block_icon_props}/>
					</BaseControl>

					<TextControl
						label={__('Link', 'inxperts-gutenberg-blo')}
						value={ icons[ index ].link }
						onChange={ (value) => {
							updateArrValues( { link: value }, index );
						} }
					/>

					<ToggleControl
						label={ __( 'Open in New Tab', 'inxperts-gutenberg-blo' ) }
						checked={ icons[ index ].linkTarget === '_blank' }
						onChange={ (value) => {
							const rel  = icons[index].rel;
							const linkTarget = value ? '_blank' : undefined;

							let updatedRel = rel;
							if ( linkTarget && ! rel ) {
								updatedRel = NEW_TAB_REL;
							} else if ( ! linkTarget && rel === NEW_TAB_REL ) {
								updatedRel = undefined;
							}

							updateArrValues( { linkTarget: linkTarget, rel: updatedRel }, index );
						}}
					/>

					<TextControl
						label={__('Link Rel', 'inxperts-gutenberg-blo')}
						value={ icons[ index ].rel || '' }
						onChange={ (value) => {
							updateArrValues( { rel: value }, index );
						} }
					/>

				</Fragment>
			);
		}

	};

	icon_block(item) {
		return(
			<Fragment>
				<span className={`${item.icon}`}>
					{IconRender(item.icon)}
				</span>
			</Fragment>
		);
	};

	icon_render(item, el_index) {
		const {selectedIcon, openPopUp} = this.state;
        
		return (
			<Fragment>
				{ ((selectedIcon == el_index) && openPopUp) && (
					<Popover
						className={`${baseClass}__popover`}
						focusOnMount='container'
						position="bottom left"
					>
						{ this.renderIconSettings(selectedIcon) }
					</Popover>
				) }
				<a
					className={`${baseClass}__link`}
					href={(item.link !='' ? item.link : '#')}
					target={ (item.linkTarget == '_blank' ? item.linkTarget : undefined ) }
					rel={ (item.rel ? item.rel : undefined ) }
					onClick={ (e)=> {
						e.preventDefault();
					}}
					>
					{this.icon_block(item)}
				</a>
			</Fragment>
		);
	};

	render() {

		const {
			attributes: {
				icons
			},
			isSelected, 
			           
		} = this.props;

		const {selectedIcon} = this.state;
        
		

		return (
			[
				<div className={`inxperts-gutenberg-blocks-social-media`}>
					<ContainerEdit
						className={classnames(
							`inxperts-social-media ${ isSelected ? 'selected' : '' }`
						)}
						attributes={ this.props.attributes }
					>
						<div className={`inxperts-social-links-lists`}>
							<ul className={`${baseClass}__list`}>
								{icons.map((item, index) => {
									
									const item_classes = classnames(`${baseClass}__item`, {
										'icon-selected': selectedIcon == index,
									} );

									return(
										<li
											className={item_classes}
											onClick={()=>{
												this.onSelectIcon(index);
											}}
										>
											{this.icon_render(item, index)}
										</li>
									);
								})}
							</ul>
						</div>
					</ContainerEdit>
					<div className='addSocialMedia'>
						{isSelected && (
							<div className={`${baseClass}__link ${baseClass}__add-icon`}>
								<Button
									icon="insert"
									onClick={this.onAddIcon}
									label={__('Add Icon', 'inxperts-gutenberg-blo')}
								/>
							</div>
						)}
					</div>
				</div>
			]
		);
	}

	componentDidMount(){
		this.props.setAttributes({ block_id: this.props.clientId });
	}

	componentDidUpdate(prevProps, prevState) {
		const {
			clientId,
			isSelected
		} = this.props;

		const {selectedIcon} = this.state;

		//Check if icon selected
		if (isSelected && selectedIcon != null){
			const thisBlock = $(`[data-block='${clientId}']`);
			const popOver = $(`.${baseClass}__popover .components-popover__content`);

			//Remove listeners
			$( thisBlock ).off();
			$( document ).off('keydown', `.${baseClass}__popover`);

			//Add listeners
			$( document ).on( 'keydown', `.${baseClass}__popover` , (e) => {
				if (e.key == 'Delete' && e.target == popOver[0]){
					this.onDeleteIcon();
				}
			});

			$( thisBlock ).on( 'keydown', (e) => {
				if (e.key == 'Delete'){
					this.onDeleteIcon();
				}
			});
		}

		// Remove active class if element not Selected (Click out of element)
		if ( !isSelected && typeof selectedIcon != 'object') {
			this.setState({selectedIcon: null});
		}
	}

	/**
	 *
	 * @param {number} index
	 */
	activateIcon(index) {
		this.setState({selectedIcon: index});
	}


	onSelectIcon(index){
		const {selectedIcon} = this.state;

		this.setState({
			selectedIcon: index,
			openPopUp: true
		});
	}

	onDeleteIcon() {
		const {selectedIcon} = this.state;

		if (selectedIcon === null) {
			return;
		}

		const {
			attributes: {
				icons,
			},
			setAttributes
		} = this.props;

		setAttributes({
			icons: icons.filter( (item, index) => index !== selectedIcon )
		});

		this.setState({selectedIcon: null});
	}

	/**
	 * On plus button click - append icon
	 */
	onAddIcon() {
		const {
			attributes: {
				icons
			},
		} = this.props;

		this.insertIcon({
			index: icons.length
		});
	}

	

	/**
	 *
	 * @param {number} options.index
	 */
	insertIcon({
		index
	}) {
		const {
			attributes: {
				icons
			},
			setAttributes
		} = this.props;

		const icon = { icon: 'fab fa-wordpress', link: '#', linkTarget: undefined, rel: '' };

		setAttributes(
			{ icons: [...icons.slice(0, index), icon, ...icons.slice(index)] }
		);
	}

}
