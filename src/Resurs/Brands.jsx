import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "../assets/products";
import "./brends.css";

export default function Brands() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // ფილტრაცია ძებნის სიტყვით და კონკრეტული ID-ების გამორიცხვა
  const filteredProducts = products
    .filter((product) => ![1, 2, 3].includes(product.id)) // გამორიცხე ID 1, 2 და 3
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // პროდუქტის დეტალებზე გადასვლის ფუნქცია
  const handleDetails = (productId) => {
    navigate(`/product/${productId}`); // გადასვლა პროდუქტის ID-ს მიხედვით
  };

  return (
    <div>git add .
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.imageUrl} alt={product.title} />
            <h3>{product.title}</h3>
            <button onClick={() => handleDetails(product.id)}>
              დეტალების ნახვა
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
