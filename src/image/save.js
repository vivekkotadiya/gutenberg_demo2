/**
* WordPress dependencies
*/
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';

export default class Save extends Component{
    constructor(props) {
        super(...arguments);
    }
    render(){
        const {
            attributes: {
                altText, 
                xlimageUrl,
                lgimageUrl,
                mdimageUrl,
                smimageUrl,
                imageUrl
            },            
        } = this.props;
        
        return(
            <>
                { (imageUrl || smimageUrl || mdimageUrl || lgimageUrl || xlimageUrl) && (
                    <picture>
                        { smimageUrl ? 
                            <source media="(max-width:460px)" srcset={`${smimageUrl}`} />
                        :''}
                        { mdimageUrl ? 
                            <source media="(min-width:460px)" srcset={`${mdimageUrl}`} />
                        : ''}
                        { lgimageUrl ? 
                            <source media="(min-width:768px)" srcset={`${lgimageUrl}`} />
                        : ''}
                        { xlimageUrl ? 
                            <source media="(min-width:960px)" srcset={`${xlimageUrl}`} />
                        : ''}
                        { imageUrl ? 
                            <source media="(min-width:1200px)" srcset={`${imageUrl}`} />
                        : ''}
                        { smimageUrl ? 
                            <img src={`${smimageUrl}`} alt="" width="auto" height="auto" />
                        : !smimageUrl && mdimageUrl ? 
                            <img src={`${mdimageUrl}`} alt="" width="auto" height="auto" />
                        : !smimageUrl && !mdimageUrl && lgimageUrl ? 
                            <img src={`${lgimageUrl}`} alt="" width="auto" height="auto" />
                        : !smimageUrl && !mdimageUrl && !lgimageUrl && xlimageUrl ?
                            <img src={`${xlimageUrl}`} alt="" width="auto" height="auto" />
                        : !smimageUrl && !mdimageUrl && !lgimageUrl && !xlimageUrl && imageUrl ?
                            <img src={`${imageUrl}`} alt={`${altText}`} width="auto" height="auto" />
                        : '' } 
                    </picture>
                )}
            </>
        )
    }
}