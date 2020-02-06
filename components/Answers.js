//@flow

import React from 'react';


type Props = {
  content: string,
  getValue: (SyntheticEvent<HTMLInputElement>, Array<{ flag: boolean, content: string }>) => void,
    disabled: boolean,
      flag: boolean,
        correctAnswer : Array<{ flag: boolean, content: string }>
}

const Answers = ({ content, getValue, disabled, flag, correctAnswer }: Props) => {

  return (
    <li>
      <input
        id={content}
        type="radio"
        disabled={disabled}
        value={content}
        name="group"
        onChange={event => { getValue(event, correctAnswer) }}
      />
      <label
        className={flag ? 'good' : 'bad'}
        htmlFor={content}
      >
        {content}

      </label>
      <style jsx>{`
        
    li {
     margin: 10px 0;
   }

    li {
     width: 33.33%;
   }

    input[type='radio'] {
     border: 0 none;
     clip: rect(0px, 0px, 0px, 0px);
     height: 1px;
     margin: -1px;
     overflow: hidden;
     padding: 0;
     position: absolute;
     width: 1px;
   }

  input[type='radio'] + label {
     background: #fff;
     cursor: pointer;
     text-align: center;
     box-sizing: border-box;
     font: 14px;
     width: 100%;
     display: block;
     padding: 30px 10px;
     text-align: center;
     border: 1px solid #cfd6de;
     transition: 0.2s all;
     min-height: 140px;
   }
   input[type='radio']:checked + label.bad {
     background: #ff4136;
     color: #fff;
   }
   input[type='radio']:checked + label.good {
     background: #2ecc40;
     color: #fff;
   }

    input[type='radio'] + label:hover {
     border-width: 5px;
   }

   input[type='radio']:focus + label {
     border: 2px solid grey;
   }

   @media only screen and (max-width: 767px) {
      li {
       width: 100%;
     }
   } 
           `}</style>
    </li>

  )
}

export default Answers;





