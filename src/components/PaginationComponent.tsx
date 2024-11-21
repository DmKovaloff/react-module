import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {

   const[query, setQuery] = useSearchParams({page:'1'})

   const onclickPrevHandler = () => {
       const page = query.get('page')
       if (page && +page > 0) {
           let currentPage = +page;
           currentPage--;
           setQuery({page:currentPage.toString()})
       }
   };

   const onclickNextHandler = () => {
        const page = query.get('page')
       if (page) {
           let currentPage = +page;
           currentPage++;
           setQuery({page:currentPage.toString()})
       }
   };

    return (
        <div>
            <hr/>
            <span>PaginationComponent:</span>
            <button onClick={onclickPrevHandler}>Prev</button>
            <button onClick={onclickNextHandler}>Next</button>
            <hr/>
        </div>
    );
};

export default PaginationComponent;