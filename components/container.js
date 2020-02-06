import React from 'react';


const Container = (props) => {

    return (

        <div id="main-container">
            {props.children}
            <style jsx global>{`
        
        html {
            width: 100%;
            height: 100%;
            background: url(${props.img}) no-repeat center center fixed; 
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: ${props.infoToggle ? '100%' : '70%'};
            position: relative; 
            background-position: ${props.infoToggle ? '0 -250px' : '-100px 0'};
            transition: all 1s;
            overflow: hidden;
        }

        img { visibility: hidden; position:absolute; bottom: -4000px;}

        

   @media only screen and (max-width: 1024px) {
    
    html {
        width: 100%;
        height: 100%;
        background: url(${props.img}) no-repeat center center fixed; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        position: relative; 
        -webkit-transition: all 0.7s;
        background-position: ${props.infoToggle ? '0 0' : '-300px 0px'};
        transition: all 1s;
        overflow: hidden;
    }

   } 
           `}</style>
        </div>

    )
}

export default Container;





