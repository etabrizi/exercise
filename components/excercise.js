//@flow

import React from 'react';
import parse from 'html-react-parser';

type Props = {
    transcript: string,
    infoToggle: void,
    title: string
}


const Excercise = ({ transcript, infoToggle, title }: Props) => {

    return (
        <div className={infoToggle ? 'open' : 'closed'}>
            <h3>{title}</h3>
            {parse(transcript)}
            <style jsx>{`
        
        h3 {
            padding:0;
            margin:10px 0 20px 0;
        }

        div {
            background: black;
            color: white;
            padding: 10px 20px;
            height: 100%;
            position: absolute;
            width: 40%;
            opactiy: 0.7;
            transition: all 0.5s;
            z-index: 1;
            overflow-y: scroll;
        }

        .open {
            right: -1000px;
        }

        .closed {
            right: 0;
        }

   @media only screen and (max-width: 767px) {
    
    div {
        width: 70%;
    }
   
    

   } 
           `}</style>
        </div>

    )
}

export default Excercise;





