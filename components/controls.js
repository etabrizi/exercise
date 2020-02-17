//@flow

import React from 'react';

type Props = {
    counterDecrease: (SyntheticEvent<HTMLButtonElement>) => void,
    counterIncrease: (SyntheticEvent<HTMLButtonElement>) => void,
    toggleInfo: (SyntheticEvent<HTMLButtonElement>) => void,
    gender: string,
    toggleGender: (SyntheticEvent<HTMLButtonElement>) => void,
    infoToggle: boolean,
    searchToggle: boolean,
    toggleSearch: boolean,
    closeAll: (SyntheticEvent<HTMLButtonElement>) => void
}

const Controls = ({ counterDecrease, counterIncrease, toggleInfo, gender, toggleGender, infoToggle, searchToggle, toggleSearch, closeAll }: Props) => {

    return (
        <nav>
            <ul className={(infoToggle && searchToggle) === true ? '' : 'shift'}>
                <li><a href="#" onClick={counterDecrease}><span className="icon-circle-left"></span></a></li>
                <li><a href="#" onClick={counterIncrease}><span className="icon-circle-right"></span></a></li>
                <li><a href="#" onClick={toggleGender}><span className={gender ? 'icon-male1' : 'icon-female1'}></span></a></li>
                <li className={(infoToggle && searchToggle) === true ? '' : 'hide'}><a href="#" onClick={toggleInfo}><span className="icon-info"></span></a></li>
                <li className={(infoToggle && searchToggle) === true ? '' : 'hide'}><a href="#" onClick={toggleSearch}><span className="icon-search"></span></a></li>
                <li className={(infoToggle && searchToggle) === true ? 'hide' : ''} onClick={closeAll}><a href="#"><span className="icon-cancel-circle"></span></a></li>
            </ul>

            <style jsx>{`

         nav {
             width: 100%;
             transition: all 0.7s;
             padding-top: 10px;
             position: absolute;
             top: 0;
             left:0;
             z-index: 100;
         }   

         nav:hover {
            transform: scale(1.05);
         }
        
        ul {
            margin:0 0 0 20px; 
            padding:0; 
            list-style: none;
            text-align: center;
            transition: all 0.2s;
        }

        li {
            display:inline-block;
        }

        .shift {
            margin-left: -250px;
        }

        a {
            font-size: 60px;
            color: #000;
            text-decoration: none;
            margin-right:20px;
        }

        a:hover {
            border-bottom: 6px solid #2D2D2D;
        }
        

   @media only screen and (max-width: 767px) {
    
    ul {
        text-align: left;
    }

    li {
        display:block;
    }

    .shift {
        margin-left: 20px;
    }

    nav:hover {
        transform: scale(1);
     }

     a:hover {
        border-bottom: none;
    }
    

   } 
           `}</style>
        </nav>

    )
}

export default Controls;





