import React, {FC} from 'react';
import {NavLink, useNavigate} from "react-router-dom";

const ProductComponent:FC<any> = ({product}) => {

    const navigate = useNavigate()

    const onClickButton = () => {
        navigate(product.id.toString(), {state:{product}})
    };

    return (
        <div>
            {product.name}
            <NavLink to={product.id.toString()}
                     state={{product}}>CLICK</NavLink>

            or

            <button onClick={onClickButton}>
                Button CLACK
            </button>
        </div>
    );
};

export default ProductComponent;