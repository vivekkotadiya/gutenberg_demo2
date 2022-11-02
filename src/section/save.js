/**
* WordPress dependencies
*/
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/block-editor';

export default class Save extends Component{
    constructor(props) {
        super(...arguments);
    }
    render(){
        const {
            attributes: {
                backgroundColor, 
                backgroundColorClass, 
                padding,
                anchor,
                hideOnDesktop,
                hideOnTablet,
                hideOnMobile,
                xlbackgroundImagesrc,
                lgbackgroundImagesrc,
                mdbackgroundImagesrc,
                smbackgroundImagesrc,
                xsbackgroundImagesrc,
                xlbackgroundImageId,
                lgbackgroundImageId,
                mdbackgroundImageId,
                smbackgroundImageId,
                xsbackgroundImageId
            },            
        } = this.props;
        
        let hideSection = '';
        if( hideOnDesktop == true ){
            hideSection += 'section--lg-hide ';
        }
        if( hideOnTablet == true ){
            hideSection += 'section--md-hide ';
        }
        if( hideOnMobile == true ){
            hideSection += 'section--xs-hide ';
        }
        const bgclass = (backgroundColorClass) ? `section--bg-${backgroundColorClass}` : '';
        return(
            <section id={anchor} className={`section section--pd-${padding} ${hideSection} ${bgclass}`} >
                { ( xlbackgroundImageId || lgbackgroundImageId || mdbackgroundImageId || smbackgroundImageId || xsbackgroundImageId ) && (
                    <div className="section__background">
                        <picture>
                            { xsbackgroundImagesrc ? 
                                <source media="(max-width:460px)" srcset={`${xsbackgroundImagesrc}`} />
                            :''}
                            { smbackgroundImagesrc ? 
                                <source media="(min-width:460px)" srcset={`${smbackgroundImagesrc}`} />
                            : ''}
                            { mdbackgroundImagesrc ? 
                                <source media="(min-width:768px)" srcset={`${mdbackgroundImagesrc}`} />
                            : ''}
                            { lgbackgroundImagesrc ? 
                                <source media="(min-width:960px)" srcset={`${mdbackgroundImagesrc}`} />
                            : ''}
                            { xlbackgroundImagesrc ? 
                                <source media="(min-width:1200px)" srcset={`${xlbackgroundImagesrc}`} />
                            : ''}
                            { xsbackgroundImagesrc ? 
                                <img src={`${xsbackgroundImagesrc}`} alt="" width="auto" height="auto" />
                            : !xsbackgroundImagesrc && smbackgroundImagesrc ? 
                                <img src={`${smbackgroundImagesrc}`} alt="" width="auto" height="auto" />
                            : !xsbackgroundImagesrc && !smbackgroundImagesrc && mdbackgroundImagesrc ? 
                                <img src={`${mdbackgroundImagesrc}`} alt="" width="auto" height="auto" />
                            : !xsbackgroundImagesrc && !smbackgroundImagesrc && !mdbackgroundImagesrc && lgbackgroundImagesrc ?
                                <img src={`${lgbackgroundImagesrc}`} alt="" width="auto" height="auto" />
                            : !xsbackgroundImagesrc && !smbackgroundImagesrc && !mdbackgroundImagesrc && !lgbackgroundImagesrc && xlbackgroundImagesrc ?
                            <img src={`${xlbackgroundImagesrc}`} alt="" width="auto" height="auto" />
                            : '' }
                        </picture>
                    </div>
                )}
                <div className={`section__content`}>
                    <InnerBlocks.Content />
                </div>
            </section>
        )
    }
}