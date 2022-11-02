/**
 * Return Jnext Timeline Block Dynamic generated Classes
 */

function colClasses(attributes){
    const {
        colResponsiveMode,
        xlwidth,
        lgwidth,
        mdwidth,
        smwidth,
        xswidth,
        xloffset,
        lgoffset,
        mdoffset,
        smoffset,
        xsoffset,
        xlcolPadding,
        lgcolPadding,
        mdcolPadding,
        smcolPadding,
        xscolPadding,
        xlalignH,
        lgalignH,
        mdalignH,
        smalignH,
        xsalignH,
        xlalignV,
        lgalignV,
        mdalignV,
        smalignV,
        xsalignV,
        hideonDesktop,
        hideonTablet,
        hideonMobile
    } = attributes;
    
    let colClasses = '';
   
    // col width
    if( xswidth == smwidth && smwidth == mdwidth && mdwidth == lgwidth && lgwidth == xlwidth ){

        colClasses += ' col--xs-' + xswidth;

    }else if( smwidth == mdwidth && mdwidth == lgwidth && lgwidth == xlwidth ){

        colClasses += ' col--xs-' + xswidth;
        colClasses += ' col--sm-' + smwidth;

    }else if( mdwidth == lgwidth && lgwidth == xlwidth ){

        if( xswidth == smwidth ){
            colClasses += ' col--xs-' + xswidth;
            colClasses += ' col--md-' + mdwidth;
        }else if( xswidth != smwidth && smwidth == mdwidth ){
            colClasses += ' col--xs-' + xswidth;
            colClasses += ' col--sm-' + smwidth;
        }else{
            colClasses += ' col--xs-' + xswidth;
            colClasses += ' col--sm-' + smwidth;
            colClasses += ' col--md-' + mdwidth;
        }     
        
    }else if( lgwidth == xlwidth ){

        if( xswidth == smwidth && smwidth == mdwidth ){
            colClasses += ' col--xs-' + xswidth;
        }else{
            if( xswidth == smwidth ){
                colClasses += ' col--xs-' + xswidth;    
            }else if( smwidth == mdwidth ){
                colClasses += ' col--xs-' + xswidth;
                colClasses += ' col--sm-' + mdwidth;
            }else if( xswidth == smwidth && mdwidth == lgwidth ){
                colClasses += ' col--xs-' + xswidth;
                colClasses += ' col--md-' + mdwidth;
            }else{
                colClasses += ' col--xs-' + xswidth;
                colClasses += ' col--sm-' + smwidth;                
            }
            colClasses += ( smwidth != mdwidth ) ? ' col--md-' + mdwidth : '';
        }
        colClasses += ' col--lg-' + lgwidth;

    }else{
        
        if( xswidth != smwidth && smwidth != mdwidth && mdwidth != lgwidth && lgwidth != xlwidth ){

            colClasses += ' col--xs-' + xswidth;
            colClasses += ' col--sm-' + smwidth;
            colClasses += ' col--md-' + mdwidth;
            colClasses += ' col--lg-' + lgwidth;
            colClasses += ' col--xl-' + xlwidth;

        }else if( xswidth == smwidth && smwidth == mdwidth && mdwidth == lgwidth ){
            colClasses += ' col--xs-' + xswidth;
        }else{
            if( xswidth == smwidth && smwidth == mdwidth ){
                colClasses += ' col--xs-' + xswidth;    
            }else if( xswidth == smwidth ){
                colClasses += ' col--xs-' + xswidth;
            }
            if( xswidth != smwidth && smwidth == mdwidth ){
                colClasses += ' col--xs-' + xswidth;
                colClasses += ' col--sm-' + smwidth;                
            }else if( mdwidth == lgwidth ){
                colClasses += ' col--md-' + mdwidth;
            }
            if( mdwidth == xlwidth ){
                if( smwidth != mdwidth ){
                    colClasses += ' col--md-' + mdwidth;
                }
                colClasses += ' col--lg-' + lgwidth;
                colClasses += ' col--xl-' + xlwidth;
            }
        }
            
        colClasses += ( mdwidth != xlwidth ) ? ' col--xl-' + xlwidth : '';
    }
    // col offset
    if( xsoffset == smoffset && smoffset == mdoffset && mdoffset == lgoffset && lgoffset == xloffset ){

        colClasses += ' col--xs-os-' + xsoffset;

    }else if( smoffset == mdoffset && mdoffset == lgoffset && lgoffset == xloffset ){

        colClasses += ' col--xs-os-' + xsoffset;
        colClasses += ' col--sm-os-' + smoffset;

    }else if( mdoffset == lgoffset && lgoffset == xloffset ){

        if( xsoffset == smoffset ){
            colClasses += ' col--xs-os-' + xsoffset;
            colClasses += ' col--md-os-' + mdoffset;
        }else if( xsoffset != smoffset && smoffset == mdoffset ){
            colClasses += ' col--xs-os-' + xsoffset;
            colClasses += ' col--sm-os-' + smoffset;
        }else{
            colClasses += ' col--xs-os-' + xsoffset;
            colClasses += ' col--sm-os-' + smoffset;
            colClasses += ' col--md-os-' + mdoffset;
        }     
        
    }else if( lgoffset == xloffset ){

        if( xsoffset == smoffset && smoffset == mdoffset ){
            colClasses += ' col--xs-os-' + xsoffset;
        }else{
            if( xsoffset == smoffset ){
                colClasses += ' col--xs-os-' + xsoffset;    
            }else if( smoffset == mdoffset ){
                colClasses += ' col--xs-os-' + xsoffset;
                colClasses += ' col--sm-os-' + mdoffset;
            }else if( xsoffset == smoffset && mdoffset == lgoffset ){
                colClasses += ' col--xs-os-' + xsoffset;
                colClasses += ' col--md-os-' + mdoffset;
            }else{
                colClasses += ' col--xs-os-' + xsoffset;
                colClasses += ' col--sm-os-' + smoffset;                
            }
            colClasses += ( smoffset != mdoffset ) ? ' col--md-os-' + mdoffset : '';
        }
        colClasses += ' col--lg-os-' + lgoffset;

    }else{
        
        if( xsoffset != smoffset && smoffset != mdoffset && mdoffset != lgoffset && lgoffset != xloffset ){

            colClasses += ' col--xs-os-' + xsoffset;
            colClasses += ' col--sm-os-' + smoffset;
            colClasses += ' col--md-os-' + mdoffset;
            colClasses += ' col--lg-os-' + lgoffset;
            colClasses += ' col--xl-os-' + xloffset;

        }else if( xsoffset == smoffset && smoffset == mdoffset && mdoffset == lgoffset ){
            colClasses += ' col--xs-os-' + xsoffset;
        }else{
            if( xsoffset == smoffset && smoffset == mdoffset ){
                colClasses += ' col--xs-os-' + xsoffset;    
            }else if( xsoffset == smoffset ){
                colClasses += ' col--xs-os-' + xsoffset;
            }
            if( xsoffset != smoffset && smoffset == mdoffset ){
                colClasses += ' col--xs-os-' + xsoffset;
                colClasses += ' col--sm-os-' + smoffset;                
            }else if( mdoffset == lgoffset ){
                colClasses += ' col--md-os-' + mdoffset;
            }
            if( mdoffset == xloffset ){
                if( smoffset != mdoffset ){
                    colClasses += ' col--md-os-' + mdoffset;
                }
                colClasses += ' col--lg-os-' + lgoffset;
                colClasses += ' col--xl-os-' + xloffset;
            }
        }
            
        colClasses += ( mdoffset != xloffset ) ? ' col--xl-os-' + xloffset : '';
    }
    
    // col padding
    if( xscolPadding == smcolPadding && smcolPadding == mdcolPadding && mdcolPadding == lgcolPadding && lgcolPadding == xlcolPadding ){

        colClasses += ' col--xs-pd-' + xscolPadding;

    }else if( smcolPadding == mdcolPadding && mdcolPadding == lgcolPadding && lgcolPadding == xlcolPadding ){

        colClasses += ' col--xs-pd-' + xscolPadding;
        colClasses += ' col--sm-pd-' + smcolPadding;

    }else if( mdcolPadding == lgcolPadding && lgcolPadding == xlcolPadding ){

        if( xscolPadding == smcolPadding ){
            colClasses += ' col--xs-pd-' + xscolPadding;
            colClasses += ' col--md-pd-' + mdcolPadding;
        }else if( xscolPadding != smcolPadding && smcolPadding == mdcolPadding ){
            colClasses += ' col--xs-pd-' + xscolPadding;
            colClasses += ' col--sm-pd-' + smcolPadding;
        }else{
            colClasses += ' col--xs-pd-' + xscolPadding;
            colClasses += ' col--sm-pd-' + smcolPadding;
            colClasses += ' col--md-pd-' + mdcolPadding;
        }     
        
    }else if( lgcolPadding == xlcolPadding ){

        if( xscolPadding == smcolPadding && smcolPadding == mdcolPadding ){
            colClasses += ' col--xs-pd-' + xscolPadding;
        }else{
            if( xscolPadding == smcolPadding ){
                colClasses += ' col--xs-pd-' + xscolPadding;    
            }else if( smcolPadding == mdcolPadding ){
                colClasses += ' col--xs-pd-' + xscolPadding;
                colClasses += ' col--sm-pd-' + mdcolPadding;
            }else if( xscolPadding == smcolPadding && mdcolPadding == lgcolPadding ){
                colClasses += ' col--xs-pd-' + xscolPadding;
                colClasses += ' col--md-pd-' + mdcolPadding;
            }else{
                colClasses += ' col--xs-pd-' + xscolPadding;
                colClasses += ' col--sm-pd-' + smcolPadding;                
            }
            colClasses += ( smcolPadding != mdcolPadding ) ? ' col--md-pd-' + mdcolPadding : '';
        }
        colClasses += ' col--lg-pd-' + lgcolPadding;

    }else{
        
        if( xscolPadding != smcolPadding && smcolPadding != mdcolPadding && mdcolPadding != lgcolPadding && lgcolPadding != xlcolPadding ){

            colClasses += ' col--xs-pd-' + xscolPadding;
            colClasses += ' col--sm-pd-' + smcolPadding;
            colClasses += ' col--md-pd-' + mdcolPadding;
            colClasses += ' col--lg-pd-' + lgcolPadding;
            colClasses += ' col--xl-pd-' + xlcolPadding;

        }else if( xscolPadding == smcolPadding && smcolPadding == mdcolPadding && mdcolPadding == lgcolPadding ){
            colClasses += ' col--xs-pd-' + xscolPadding;
        }else{
            if( xscolPadding == smcolPadding && smcolPadding == mdcolPadding ){
                colClasses += ' col--xs-pd-' + xscolPadding;    
            }else if( xscolPadding == smcolPadding ){
                colClasses += ' col--xs-pd-' + xscolPadding;
            }
            if( xscolPadding != smcolPadding && smcolPadding == mdcolPadding ){
                colClasses += ' col--xs-pd-' + xsoffset;
                colClasses += ' col--sm-pd-' + smcolPadding;                
            }else if( mdcolPadding == lgcolPadding ){
                colClasses += ' col--md-pd-' + mdcolPadding;
            }
            if( mdcolPadding == xlcolPadding ){
                if( smcolPadding != mdcolPadding ){
                    colClasses += ' col--md-pd-' + mdcolPadding;
                }
                colClasses += ' col--lg-pd-' + lgcolPadding;
                colClasses += ' col--xl-pd-' + xlcolPadding;
            }
        }
            
        colClasses += ( mdcolPadding != xlcolPadding ) ? ' col--xl-pd-' + xlcolPadding : '';
    }

    // col horizontal align
    if( xsalignH == smalignH && smalignH == mdalignH && mdalignH == lgalignH && lgalignH == xlalignH ){

        colClasses += ' col--xs-' + xsalignH;

    }else if( smalignH == mdalignH && mdalignH == lgalignH && lgalignH == xlalignH ){

        colClasses += ' col--xs-' + xsalignH;
        colClasses += ' col--sm-' + smalignH;

    }else if( mdalignH == lgalignH && lgalignH == xlalignH ){

        if( xsalignH == smalignH ){
            colClasses += ' col--xs-' + xsalignH;
            colClasses += ' col--md-' + mdalignH;
        }else if( xsalignH != smalignH && smalignH == mdalignH ){
            colClasses += ' col--xs-' + xsalignH;
            colClasses += ' col--sm-' + smalignH;
        }else{
            colClasses += ' col--xs-' + xsalignH;
            colClasses += ' col--sm-' + smalignH;
            colClasses += ' col--md-' + mdalignH;
        }     
        
    }else if( lgalignH == xlalignH ){

        if( xsalignH == smalignH && smalignH == mdalignH ){
            colClasses += ' col--xs-' + xsalignH;
        }else{
            if( xsalignH == smalignH ){
                colClasses += ' col--xs-' + xsalignH;    
            }else if( smalignH == mdalignH ){
                colClasses += ' col--xs-' + xsalignH;
                colClasses += ' col--sm-' + mdalignH;
            }else if( xsalignH == smalignH && mdalignH == lgalignH ){
                colClasses += ' col--xs-' + xsalignH;
                colClasses += ' col--md-' + mdalignH;
            }else{
                colClasses += ' col--xs-' + xsalignH;
                colClasses += ' col--sm-' + smalignH;                
            }
            colClasses += ( smalignH != mdalignH ) ? ' col--md-' + mdalignH : '';
        }
        colClasses += ' col--lg-' + lgalignH;

    }else{
        
        if( xsalignH != smalignH && smalignH != mdalignH && mdalignH != lgalignH && lgalignH != xlalignH ){

            colClasses += ' col--xs-' + xsalignH;
            colClasses += ' col--sm-' + smalignH;
            colClasses += ' col--md-' + mdalignH;
            colClasses += ' col--lg-' + lgalignH;
            colClasses += ' col--xl-' + xlalignH;

        }else if( xsalignH == smalignH && smalignH == mdalignH && mdalignH == lgalignH ){
            colClasses += ' col--xs-' + xsalignH;
        }else{
            if( xsalignH == smalignH && smalignH == mdalignH ){
                colClasses += ' col--xs-' + xsalignH;    
            }else if( xsalignH == smalignH ){
                colClasses += ' col--xs-' + xsalignH;
            }
            if( xsalignH != smalignH && smalignH == mdalignH ){
                colClasses += ' col--xs-' + xsoffset;
                colClasses += ' col--sm-' + smalignH;                
            }else if( mdalignH == lgalignH ){
                colClasses += ' col--md-' + mdalignH;
            }
            if( mdalignH == xlalignH ){
                if( smalignH != mdalignH ){
                    colClasses += ' col--md-' + mdalignH;
                }
                colClasses += ' col--lg-' + lgalignH;
                colClasses += ' col--xl-' + xlalignH;
            }
        }
            
        colClasses += ( mdalignH != xlalignH ) ? ' col--xl-' + xlalignH : '';
    }

    // col Vertical align
    if( xsalignV == smalignV && smalignV == mdalignV && mdalignV == lgalignV && lgalignV == xlalignV ){

        colClasses += ' col--xs-' + xsalignV;

    }else if( smalignV == mdalignV && mdalignV == lgalignV && lgalignV == xlalignV ){

        colClasses += ' col--xs-' + xsalignV;
        colClasses += ' col--sm-' + smalignV;

    }else if( mdalignV == lgalignV && lgalignV == xlalignV ){

        if( xsalignV == smalignV ){
            colClasses += ' col--xs-' + xsalignV;
            colClasses += ' col--md-' + mdalignV;
        }else if( xsalignV != smalignV && smalignV == mdalignV ){
            colClasses += ' col--xs-' + xsalignV;
            colClasses += ' col--sm-' + smalignV;
        }else{
            colClasses += ' col--xs-' + xsalignV;
            colClasses += ' col--sm-' + smalignV;
            colClasses += ' col--md-' + mdalignV;
        }     
        
    }else if( lgalignV == xlalignV ){

        if( xsalignV == smalignV && smalignV == mdalignV ){
            colClasses += ' col--xs-' + xsalignV;
        }else{
            if( xsalignV == smalignV ){
                colClasses += ' col--xs-' + xsalignV;    
            }else if( smalignV == mdalignV ){
                colClasses += ' col--xs-' + xsalignV;
                colClasses += ' col--sm-' + mdalignV;
            }else if( xsalignV == smalignV && mdalignV == lgalignV ){
                colClasses += ' col--xs-' + xsalignV;
                colClasses += ' col--md-' + mdalignV;
            }else{
                colClasses += ' col--xs-' + xsalignV;
                colClasses += ' col--sm-' + smalignV;                
            }
            colClasses += ( smalignV != mdalignV ) ? ' col--md-' + mdalignV : '';
        }
        colClasses += ' col--lg-' + lgalignV;

    }else{
        
        if( xsalignV != smalignV && smalignV != mdalignV && mdalignV != lgalignV && lgalignV != xlalignV ){

            colClasses += ' col--xs-' + xsalignV;
            colClasses += ' col--sm-' + smalignV;
            colClasses += ' col--md-' + mdalignV;
            colClasses += ' col--lg-' + lgalignV;
            colClasses += ' col--xl-' + xlalignV;

        }else if( xsalignV == smalignV && smalignV == mdalignV && mdalignV == lgalignV ){
            colClasses += ' col--xs-' + xsalignV;
        }else{
            if( xsalignV == smalignV && smalignV == mdalignV ){
                colClasses += ' col--xs-' + xsalignV;    
            }else if( xsalignV == smalignV ){
                colClasses += ' col--xs-' + xsalignV;
            }
            if( xsalignV != smalignV && smalignV == mdalignV ){
                colClasses += ' col--xs-' + xsoffset;
                colClasses += ' col--sm-' + smalignV;                
            }else if( mdalignV == lgalignV ){
                colClasses += ' col--md-' + mdalignV;
            }
            if( mdalignV == xlalignV ){
                if( smalignV != mdalignV ){
                    colClasses += ' col--md-' + mdalignV;
                }
                colClasses += ' col--lg-' + lgalignV;
                colClasses += ' col--xl-' + xlalignV;
            }
        }
            
        colClasses += ( mdalignV != xlalignV ) ? ' col--xl-' + xlalignV : '';
    }

    if( hideonDesktop == true ){
        colClasses += ' col--lg-hide';
    }
    if( hideonTablet == true ){
        colClasses += ' col--md-hide';
    }
    if( hideonMobile == true ){
        colClasses += ' col--xs-hide';
    }

    return [colClasses];
}
export default colClasses;