import React from 'react';
import { useParams } from 'react-router-dom';
import products from "../../assets/products";


const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    return (
        <div>
            {product ? (
                <div>
                    <h2>{product.title}</h2>
                    <img src={product.imageUrl} alt={product.title} />
                    <p>ამ პროდუქტის დეტალები...</p>
                </div>
            ) : (
                <p>პროდუქტი ვერ მოიძებნა.</p>
            )}
        </div>
    );
};

export default ProductDetails;
