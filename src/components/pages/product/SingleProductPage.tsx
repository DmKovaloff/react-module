import React, {FC} from 'react';
import {useLocation, useParams} from "react-router-dom";

const SingleProductPage:FC<any> = ({product}) => {

    const {id} = useParams();

    const {state:{product:item}} = useLocation();

    return (
        <div>
            <h3>  SingleProductPage {id}:</h3>
            <hr/>
            {item.username}
            <hr/>
            {item.phone};

        </div>
    );
};

export default SingleProductPage;