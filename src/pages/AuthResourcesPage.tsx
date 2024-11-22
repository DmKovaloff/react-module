import React, {useState} from 'react';
import {IProduct} from "../models/IProduct";
import {loadAuthProducts, refresh} from "../services/api.service";
import {AxiosError} from "axios";

const AuthResourcesPage = () => {

    const[products, setProducts] = useState<IProduct[]>([])

    return (
        <div>
            <h2>AuthResourcesPage</h2>

            <div>
                <button
                    onClick={async () => {
                        try {
                        let responseWithProducts = await loadAuthProducts();
                        setProducts(responseWithProducts)
                    }catch (e) {
                        let error = e as AxiosError;
                        alert(error.message);
                        await refresh();
                    }
            }}
                >Show auth resources
                </button>

            </div>

                {products.map(product => <div key={product.id}> {product.title} </div> )}

            </div>
    );
};

export default AuthResourcesPage;