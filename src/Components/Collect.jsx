import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import shoe1 from "../Components/Assets/4.png";
import shoe2 from "../Components/Assets/shoe9.png";
import shoe3 from "../Components/Assets/shoe3.png";
import shoe4 from "../Components/Assets/shoe4.png";
import shoe5 from "../Components/Assets/shoe5.png";
import shoe6 from "../Components/Assets/shoe6.png";
import shoe7 from "../Components/Assets/shoe7.png";
import shoe8 from "../Components/Assets/shoe8.png";
import shoe9 from "../Components/Assets/shoe9.png";
import shoe10 from "../Components/Assets/shoe10.png";
import shoe11 from "../Components/Assets/shoe11.png";
import shoe12 from "../Components/Assets/shoe12.png";
import shoe13 from "../Components/Assets/shoe13.png";
import shoe14 from "../Components/Assets/shoe14.png";
import shoe15 from "../Components/Assets/shoe15.png";
import './Collect.css';
import Cart from './Cart'; 

const shoeCollection = [
  { id: 1, name: "Nike Air Max", price: "$150", image: shoe1, rating: 4 },
  { id: 2, name: "Adidas Ultraboost", price: "$180", image: shoe2, rating: 5 },
  { id: 3, name: "Puma RS-X", price: "$120", image: shoe3, rating: 3 },
  { id: 4, name: "Reebok Classic", price: "$100", image: shoe4, rating: 4 },
  { id: 5, name: "New Balance 990", price: "$170", image: shoe5, rating: 5 },
  { id: 6, name: "Vans Old Skool", price: "$70", image: shoe6, rating: 4 },
  { id: 7, name: "Converse Taylor", price: "$65", image: shoe7, rating: 5 },
  { id: 8, name: "Asics Gel-Kayano", price: "$160", image: shoe8, rating: 4 },
  { id: 9, name: "Saucony Jazz", price: "$90", image: shoe9, rating: 3 },
  { id: 10, name: "Under Armour HOVR", price: "$140", image: shoe10, rating: 4 },
  { id: 11, name: "Brooks Ghost", price: "$130", image: shoe11, rating: 5 },
  { id: 12, name: "Hoka One One Bondi", price: "$160", image: shoe12, rating: 5 },
  { id: 13, name: "On Cloudstratus", price: "$170", image: shoe13, rating: 4 },
  { id: 14, name: "Mizuno Wave Rider", price: "$150", image: shoe14, rating: 4 },
  { id: 15, name: "Nike React Run", price: "$160", image: shoe15, rating: 5 },
];

export const Collect = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {
    setCart([...cart, shoe]);
  };

  const removeFromCart = (shoe) => {
    setCart(cart.filter((item) => item.id !== shoe.id));
  };

  const buyNow = (shoe) => {
    addToCart(shoe);
    alert(`${shoe.name} added to cart!`);
  };

  return (
    <section className="shoe-collection" id="collection">
      <h1 className="heading">OUR <span>SHOE COLLECTION</span></h1>
      <div className="collection-container">
        {shoeCollection.map((shoe) => (
          <div className="collection-box" key={shoe.id}>
            <img src={shoe.image} alt={shoe.name} />
            <h3>{shoe.name}</h3>
            <div className="price">{shoe.price}</div>
            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <i key={index} className={`fa fa-star${index < shoe.rating ? '' : '-o'}`}></i>
              ))}
            </div>
            <button className="add-to-cart" onClick={() => addToCart(shoe)}>
              Add to Cart
            </button>
            <button className="buy-now" onClick={() => buyNow(shoe)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
      {/* Render the Cart component here */}
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
    </section>
  );
};

export default Collect;
