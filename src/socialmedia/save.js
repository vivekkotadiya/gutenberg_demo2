/**
* External dependencies
*/
import classnames from 'classnames';
import IconRender from "../Icons/IconRender";

/**
* WordPress dependencies
*/
import { __ } from '@wordpress/i18n';
import {Component, Fragment} from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';

/**
* Module Constants
*/
const baseClass = 'wp-block-inxperts-social-links';

export const ContainerSave = ( props ) => {
    const styles = {};  

    return (
        <div
            className={ `${ props.className }` }
            style={ { ...styles, ...props.style } }
        >
            { props.children }
        </div>
    );

};

/**
* Create an Inspector Controls
*/
export default class Save extends Component {

	constructor(props) {
		super(...arguments);

		this.icon_render = this.icon_render.bind(this);
		this.icon_block = this.icon_block.bind(this);
	}

	icon_block(item) {
		
		return(
			<Fragment>
				<span className={`${item.icon}`}>
					{ item.icon != undefined ? IconRender(item.icon) : ''}
				</span>
			</Fragment>
		);
	};

	icon_render(item) {
		
		return (
			<Fragment>		
				<a
					className={`${baseClass}__link`}
					href={(item.link !='' ? item.link : '#')}
					target={ (item.linkTarget == '_blank' ? item.linkTarget : undefined ) }
					rel={ (item.rel ? item.rel : undefined ) }
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
			isSelected
		} = this.props;
		
		return (
			<div className={`inxperts-gutenberg-blocks-social-media`}>
				<ContainerSave
					className={classnames(
						`inxperts-social-media ${ isSelected ? 'selected' : '' }`
					)}
					attributes={ this.props.attributes }
				>
					<div className={`inxperts-social-links-lists`}>
						<ul className={`${baseClass}__list`}>
							{icons.map((item, index) => {	
								const item_classes = classnames(`${baseClass}__item`);
								return (
									<li	className={item_classes}>{this.icon_render(item, index)}</li>
								);
							})}
						</ul>
					</div>
				</ContainerSave>
			</div>
		);
	}
}