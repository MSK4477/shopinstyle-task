import React, { useState } from "react";
import card from "./card.module.css";

const Card = ({
  imageSrc,
  title,
  description,
  stars,
  btn,
  sale,
  addToCart,
  removeFromCart,
  id
}) => {
  const sales = {
    position: 'absolute',
    border: '1px solid',
    borderRadius: '5px',
    width: 'max-content',
    top: '10px',
    left: '190px',
    backgroundColor: 'black',
    color: '#FFFFFF',
    fontSize: '12px',
    fontWeight: 'bold'
  };

  const [cart, setCart] = useState(false);

  const handleCartAction = () => {
    if (cart) {
      setCart(false);
      removeFromCart(id);
    } else {
      setCart(true);
      addToCart(id);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className={card.cards}>
            <div className="card" style={{ width: '14rem', height: '23rem' }}>
              <p style={sales}>{sale}</p>
              <img src={imageSrc} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p>{stars}</p>
                <p className="card-text">{description}</p>
                {cart ? (
                  <button className="btn btn-outline-dark mt-auto" 
                  onClick={handleCartAction}
                  style={{  
                    backgroundColor:"red",
                  color:"white",
                  position:"relative",
                  top: "30px", borderRadius: "8px"  }}
                  
                  >
                   
                    Remove From Cart 
                  </button>
                ) : (
                  <button
                    onClick={handleCartAction}
                    className="btn btn-outline-dark mt-auto"
                    style={{ position: "relative", 
                    top: "30px", 
                    borderRadius: "8px" }}
                  >
                  {btn}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
