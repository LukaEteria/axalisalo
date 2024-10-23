import "../App.css"; // თქვენი CSS სტილები
import React from "react";
import Slideshow from "./Assests/Slideshow"; // Slideshow კომპონენტის იმპორტი
import Products from "../assets/products";




const Home = () => {
  return (
    <div className="Home_container">
      <section>
        <Slideshow /> 
      </section>
      <section>
        <Products />
      </section>
    </div>
  );
};

export default Home;
