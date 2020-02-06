//@flow

import React from 'react';

type Props = {
    excercises: Array<exercises>,
    searchTerm: string,
    getSearchValue: (SyntheticEvent<HTMLButtonElement>) => void,
    updateCard: (SyntheticEvent<HTMLButtonElement>) => void,
    searchToggle: (SyntheticEvent<HTMLButtonElement>) => void
}

const Search = ({ excercises, searchTerm, getSearchValue, updateCard, searchToggle }: Props) => {

    let fullList = excercises.map(function (item, i) {
        return item.name
    }, this);

    let searchResults = fullList.filter((item) => {
        return item.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    }
    );

    return (
        <div className={searchToggle ? 'open' : 'closed'}>
            <input type="search" onChange={getSearchValue} placeholder="Search for your workout . . . " />
            {searchResults.length <= 10 ? searchResults.map(function (item, i) {
                return <a className="" key={i} href="#" onClick={updateCard}>{item}</a>
            }) : ''}

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

        input {
            width: 100%; 
            padding: 20px;
            border: 2px solid #fff;
            background: #000;
            color: #fff;
            outline: none;
        }    

        a {
        display: block;
        color: #fff;
        padding: 30px 10px;
        border-bottom: 1px solid #fff;
        text-decoration: none;
        }

        a:hover {
            background: #0F0F0F; 
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

export default Search;





