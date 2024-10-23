import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import products from '../../products'; // პროდუქციის ფაილი სწორად უნდა იყოს დაპათული
import { useNavigate } from 'react-router-dom'; // მარშრუტირების ფუნქცია

export default function Products() {
    const navigate = useNavigate(); // useNavigate ფუნქციის გამოყენება

    // პროდუქტის შეძენა (ტესტისთვის)
    const handlePurchase = (productId) => {
        console.log(`Product ${productId} purchased!`);
    };

    // დეტალებზე გადასვლა
    const handleDetails = (productId) => {
        navigate(`/product/${productId}`); // აქ მარშრუტირება ხდება შესაბამის ID-ზე
    };

    // გაფილტრული პროდუქცია, მხოლოდ 1, 2 და 3 ID
    const filteredProducts = products.filter(product => [1, 2, 3].includes(product.id));

    return (
        <div className='card-home'>
            <h1>ფასი - ხარისხი - სიჩქარე</h1>
            <br />
            <p>ჩვენი პროდუქცია შექმნილია იმისათვის, რომ შეავსოთ თქვენი სახლის ყველა კუთხე სიახლით და სისუფთავით. ეს ეფექტური ფორმულა გამოირჩევა ძლიერი გამწმენდი თვისებებით.</p>
            <div className="home-itms-card">
                {filteredProducts.map(product => (
                    <div key={product.id} className="card">
                        <img src={product.imageUrl} alt={product.title} />
                        <h3>{product.title}</h3>
                        <button className='Home-products-button' onClick={() => handleDetails(product.id)}>
                            <FontAwesomeIcon icon={faEye} /> დეტალების ნახვა {/* დეტალებზე გადასვლა */}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
