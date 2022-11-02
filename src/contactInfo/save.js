/**
* WordPress dependencies
*/
import { __ } from '@wordpress/i18n';

export default function save({ attributes }) {
    return(
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
    );
}