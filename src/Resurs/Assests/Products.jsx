import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import products from '../../assets/products'; 
import { useNavigate } from 'react-router-dom';

export default function Products() {
    const navigate = useNavigate();

    const handleDetails = (productId) => {
        navigate(`/product/${productId}`);
    };

    const filteredProducts = products.filter(product => [1, 2, 3].includes(product.id));

    // Error handling
    if (!filteredProducts.length) {
        return <div>No products available.</div>;
    }

    return (
        <div className='card-home'>
            <h1>ფასი - ხარისხი - სიჩქარე</h1>
            <p>ჩვენი პროდუქცია შექმნილია იმისათვის, რომ შეავსოთ თქვენი სახლის ყველა კუთხე სიახლით და სისუფთავით.</p>
            <div className="home-itms-card">
                {filteredProducts.map(product => (
                    <div key={product.id} className="card">
                        <img src={product.imageUrl} alt={product.title} />
                        <h3>{product.title}</h3>
                        <button className='Home-products-button' onClick={() => handleDetails(product.id)}>
                            <FontAwesomeIcon icon={faEye} /> დეტალების ნახვა
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
