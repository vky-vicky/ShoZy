import React from 'react';
import main from "../Components/Assets/mainone.jpeg";
import './Offer.css'; // Optional: for any custom styles

const offers = [
  { id: 1, name: "Nike Air Max", price: "$150", rating: 4 },
  { id: 2, name: "Adidas Ultraboost", price: "$180", rating: 5 },
];

export const Offer = () => {
  return (
    <section className="offer-section" id='offer'>
      <div className="offer-content">
        <h1 className="offer-heading">Special Offers</h1>
        <p className="offer-description">
          Don't miss out on our exclusive offers! Grab your favorite shoes at amazing prices.
        </p>
        {offers.map((offer) => (
          <div key={offer.id} className="offer-item">
            <h3>{offer.name}</h3>
            <div className="offer-details">
              <span className="offer-price">{offer.price}</span>
              <span className="offer-rating">
                {[...Array(5)].map((_, index) => (
                  <i key={index} className={`fa fa-star${index < offer.rating ? '' : '-o'}`}></i>
                ))}
              </span>
            </div>
          </div>
        ))}
        <button className="offer-button">Shop Now</button>
      </div>
      <div className="offer-image">
        <img src={main} alt="Special Offer" />
      </div>
    </section>
  );
};

export default Offer;
