import React, {useEffect, useState} from 'react';

import ProductComponent from "../poroductComponent/ProductComponent";

const ProductsComponent = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => {
                    setProducts(users);
                })
    }, []);
    return (
        <div>
            {
                products.map((product, index) => (<ProductComponent key={index} product={product}/>))
            }
        </div>
    );
};

export default ProductsComponent;