import React from 'react';
import Img from 'react-image'


const Container = (props) => {


    return (

        <div id="main-container">
            {props.children}
            <Img src={props.img}
                className="animated fadeIn"
                loader={<div className="loading"><img src="http://etabrizi.co.uk/spinner.gif" /></div>}
                decode={false} />

            <style jsx global>{`
        
        .loading { width: 100%; font-size: 40px; text-align: center; margin-top: 0; }
        #main-container {width: 700px; margin: 0 auto; position:relative; }
        img { width: 100%; position:relative;}
        #main-container:after {
            content:''; 
            display:block; 
            position: absolute; 
            top:0; 
            left:0; 
            width:100%; 
            height: 100%;
            background: rgb(255,255,255);
            background: linear-gradient(180deg, rgba(255,255,255,0) 74%, rgba(255,255,255,1) 94%, rgba(255,255,255,1) 100%);
        }

   @media only screen and (max-width: 767px) {
    
    #main-container {width: 100%; margin: 0 auto; min-height: 800px; position:relative;}
    .loading { width: 100%; font-size: 40px; text-align: right; margin-top: 0; }
    #main-container:after {
        background: rgb(255,255,255);
        background: linear-gradient(180deg, rgba(255,255,255,0) 20%, rgba(255,255,255,1) 45%, rgba(255,255,255,1) 100%);
    }
   } 
           `}</style>
        </div>

    )
}

export default Container;





