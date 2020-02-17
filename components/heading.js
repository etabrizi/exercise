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
        <div className={(infoToggle && searchToggle) ? 'show ' : ' hide '}>
            <Typist key={title}><h2>{title}</h2></Typist>

            <style jsx>{`

            h2 {
                font-size: 60px;
                position: absolute;
                top: auto;
                left: 20px;
                margin: 0;
                transisiton: all 2s;
                z-index: 100;
                width: auto;
                bottom: 20px;
            }
        
   @media only screen and (max-width: 767px) {
    
            h2 {
                font-size: 40px;
                position: absolute;
                top: 440px;
                left: 20px;
                margin: 0;
                transisiton: all 2s;
                z-index: 100;
                width: 200px;
            }

   } 
           `}</style>
        </div >

    )
}

export default Heading;





