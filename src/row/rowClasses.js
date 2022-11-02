/**
 * Return IGB row Dynamic generated Classes
 */

function rowClasses(attributes){
    const {
        xlAlignH,
        lgAlignH,
        mdAlignH,
        smAlignH,
        xsAlignH,
        xlAlignV,
        lgAlignV,
        mdAlignV,
        smAlignV,
        xsAlignV,
        xlReverseCol,
        lgReverseCol,
        mdReverseCol,
        smReverseCol,
        xsReverseCol,
        colheight,
        contentwidth,
        colgap
    } = attributes;
    
    let rowClasses = '';

    // Horizontal
    if( xsAlignH == smAlignH && smAlignH == mdAlignH && mdAlignH == lgAlignH && lgAlignH == xlAlignH ){

        rowClasses += ' row--xs-' + xsAlignH;

    }else if( smAlignH == mdAlignH && mdAlignH == lgAlignH && lgAlignH == xlAlignH ){

        rowClasses += ' row--xs-' + xsAlignH;
        rowClasses += ' row--sm-' + smAlignH;

    }else if( mdAlignH == lgAlignH && lgAlignH == xlAlignH ){

        if( xsAlignH == smAlignH ){
            rowClasses += ' row--xs-' + xsAlignH;
            rowClasses += ' row--md-' + mdAlignH;
        }else if( xsAlignH != smAlignH && smAlignH == mdAlignH ){
            rowClasses += ' row--xs-' + xsAlignH;
            rowClasses += ' row--sm-' + smAlignH;
        }else{
            rowClasses += ' row--xs-' + xsAlignH;
            rowClasses += ' row--sm-' + smAlignH;
            rowClasses += ' row--md-' + mdAlignH;
        }     
        
    }else if( lgAlignH == xlAlignH ){

        if( xsAlignH == smAlignH && smAlignH == mdAlignH ){
            rowClasses += ' row--xs-' + xsAlignH;
        }else{
            if( xsAlignH == smAlignH ){
                rowClasses += ' row--xs-' + xsAlignH;    
            }else if( smAlignH == mdAlignH ){
                rowClasses += ' row--xs-' + xsAlignH;
                rowClasses += ' row--sm-' + mdAlignH;
            }else if( xsAlignH == smAlignH && mdAlignH == lgAlignH ){
                rowClasses += ' row--xs-' + xsAlignH;
                rowClasses += ' row--md-' + mdAlignH;
            }else{
                rowClasses += ' row--xs-' + xsAlignH;
                rowClasses += ' row--sm-' + smAlignH;                
            }
            rowClasses += ( smAlignH != mdAlignH ) ? ' row--md-' + mdAlignH : '';
        }
        rowClasses += ' row--lg-' + lgAlignH;

    }else{
        
        if( xsAlignH != smAlignH && smAlignH != mdAlignH && mdAlignH != lgAlignH && lgAlignH != xlAlignH ){

            rowClasses += ' row--xs-' + xsAlignH;
            rowClasses += ' row--sm-' + smAlignH;
            rowClasses += ' row--md-' + mdAlignH;
            rowClasses += ' row--lg-' + lgAlignH;
            rowClasses += ' row--xl-' + xlAlignH;

        }else if( xsAlignH == smAlignH && smAlignH == mdAlignH && mdAlignH == lgAlignH ){
            rowClasses += ' row--xs-' + xsAlignH;
        }else{
            if( xsAlignH == smAlignH && smAlignH == mdAlignH ){
                rowClasses += ' row--xs-' + xsAlignH;    
            }else if( xsAlignH == smAlignH ){
                rowClasses += ' row--xs-' + xsAlignH;
            }
            if( xsAlignH != smAlignH && smAlignH == mdAlignH ){
                rowClasses += ' row--xs-' + xsAlignH;
                rowClasses += ' row--sm-' + smAlignH;                
            }else if( mdAlignH == lgAlignH ){
                rowClasses += ' row--md-' + mdAlignH;
            }
            if( mdAlignH == xlAlignH ){
                if( smAlignH != mdAlignH ){
                    rowClasses += ' row--md-' + mdAlignH;
                }
                rowClasses += ' row--lg-' + lgAlignH;
                rowClasses += ' row--xl-' + xlAlignH;
            }
        }
            
        rowClasses += ( mdAlignH != xlAlignH ) ? ' row--xl-' + xlAlignH : '';
    }

    // vertical
    if( xsAlignV == smAlignV && smAlignV == mdAlignV && mdAlignV == lgAlignV && lgAlignV == xlAlignV ){

        rowClasses += ' row--xs-' + xsAlignV;

    }else if( smAlignV == mdAlignV && mdAlignV == lgAlignV && lgAlignV == xlAlignV ){

        rowClasses += ' row--xs-' + xsAlignV;
        rowClasses += ' row--sm-' + smAlignV;

    }else if( mdAlignV == lgAlignV && lgAlignV == xlAlignV ){

        if( xsAlignV == smAlignV ){
            rowClasses += ' row--xs-' + xsAlignV;
            rowClasses += ' row--md-' + mdAlignV;
        }else if( xsAlignV != smAlignV && smAlignV == mdAlignV ){
            rowClasses += ' row--xs-' + xsAlignV;
            rowClasses += ' row--sm-' + smAlignV;
        }else{
            rowClasses += ' row--xs-' + xsAlignV;
            rowClasses += ' row--sm-' + smAlignV;
            rowClasses += ' row--md-' + mdAlignV;
        }     
        
    }else if( lgAlignV == xlAlignV ){

        if( xsAlignV == smAlignV && smAlignV == mdAlignV ){
            rowClasses += ' row--xs-' + xsAlignV;
        }else{
            if( xsAlignV == smAlignV ){
                rowClasses += ' row--xs-' + xsAlignV;    
            }else if( smAlignV == mdAlignV ){
                rowClasses += ' row--xs-' + xsAlignV;
                rowClasses += ' row--sm-' + mdAlignV;
            }else if( xsAlignV == smAlignV && mdAlignV == lgAlignV ){
                rowClasses += ' row--xs-' + xsAlignV;
                rowClasses += ' row--md-' + mdAlignV;
            }else{
                rowClasses += ' row--xs-' + xsAlignV;
                rowClasses += ' row--sm-' + smAlignV;                
            }
            rowClasses += ( smAlignV != mdAlignV ) ? ' row--md-' + mdAlignV : '';
        }
        rowClasses += ' row--lg-' + lgAlignV;

    }else{
        
        if( xsAlignV != smAlignV && smAlignV != mdAlignV && mdAlignV != lgAlignV && lgAlignV != xlAlignV ){

            rowClasses += ' row--xs-' + xsAlignV;
            rowClasses += ' row--sm-' + smAlignV;
            rowClasses += ' row--md-' + mdAlignV;
            rowClasses += ' row--lg-' + lgAlignV;
            rowClasses += ' row--xl-' + xlAlignV;

        }else if( xsAlignV == smAlignV && smAlignV == mdAlignV && mdAlignV == lgAlignV ){
            rowClasses += ' row--xs-' + xsAlignV;
        }else{
            if( xsAlignV == smAlignV && smAlignV == mdAlignV ){
                rowClasses += ' row--xs-' + xsAlignV;    
            }else if( xsAlignV == smAlignV ){
                rowClasses += ' row--xs-' + xsAlignV;
            }
            if( xsAlignV != smAlignV && smAlignV == mdAlignV ){
                rowClasses += ' row--xs-' + xsAlignV;
                rowClasses += ' row--sm-' + smAlignV;                
            }else if( mdAlignV == lgAlignV ){
                rowClasses += ' row--md-' + mdAlignV;
            }
            if( mdAlignV == xlAlignV ){
                if( smAlignV != mdAlignV ){
                    rowClasses += ' row--md-' + mdAlignV;
                }
                rowClasses += ' row--lg-' + lgAlignV;
                rowClasses += ' row--xl-' + xlAlignV;
            }
        }
            
        rowClasses += ( mdAlignV != xlAlignV ) ? ' row--xl-' + xlAlignV : '';
    }
    
    if ( xlReverseCol == true && lgReverseCol == true && mdReverseCol == true && smReverseCol == true && xsReverseCol == true) {
        
        rowClasses += ' row--xs-rv';

    }else if ( xlReverseCol == true && lgReverseCol == true && mdReverseCol == true && smReverseCol == true && xsReverseCol == false) {
        
        rowClasses += ' row--sm-rv';

    }else if ( xlReverseCol == true && lgReverseCol == true && mdReverseCol == true && smReverseCol == false && xsReverseCol == false) {
        
        rowClasses += ' row--md-rv';

    }else if ( xlReverseCol == true && lgReverseCol == true && mdReverseCol == false && smReverseCol == false && xsReverseCol == false) {
        
        rowClasses += ' row--lg-rv';

    }else if ( xlReverseCol == true && lgReverseCol == false && mdReverseCol == false && smReverseCol == false && xsReverseCol == false) {
        
        rowClasses += ' row--xl-rv';

    }else{
        
        rowClasses += ( xlReverseCol == true ) ? ' row--xl-rv' : '';
        
        rowClasses += ( lgReverseCol == true ) ? ' row--lg-rv' : '';
        
        rowClasses += ( mdReverseCol == true ) ? ' row--md-rv' : '';
        
        rowClasses += ( smReverseCol == true ) ? ' row--sm-rv' : '';
        
        rowClasses += ( xsReverseCol == true ) ? ' row--xs-rv' : '';        
        
    }

    if( colheight == true ){
        rowClasses += ' row--col-ht';
    }

    if( contentwidth == true ){
        rowClasses += ' row--ct-wd';
    }

    rowClasses += ( colgap ) ? ` row--col-gap-${colgap}` : '';
    
    return [rowClasses];
}
export default rowClasses;