//@flow

import React from 'react';
import Typist from 'react-typist';

type Props = {
    title: string,
    infoToggle: boolean,
    searchToggle: boolean
}


const Heading = ({ title, infoToggle, searchToggle }: Props) => {

    return (
        <div className={(infoToggle && searchToggle) ? 'animated fadeIn' : 'animated fadeOut'}>
            <Typist key={title}><h2>{title}</h2></Typist>

            <style jsx>{`

            h2 {
                font-size: 75px;
                position: absolute;
                bottom: 0;
                left: 0;
                margin: 0;
                transisiton: all 2s;
                z-index: 1;
            }
        
   @media only screen and (max-width: 767px) {
    
            h2 {
                font-size: 40px;
                bottom: 20px;
                left: 20px;
            }
    
   } 
           `}</style>
        </div >

    )
}

export default Heading;





