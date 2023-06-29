import React from "react";
import card from "./card.module.css"

const Card = ({ sale,imageSrc, stars, title, description, btn }) => {
   
    const sales = {
        position: 'absolute',
      border: '1px solid',
      borderRadius: '5px',
        width: 'max-content;',
        top: '10px',
        left: '190px',
        backgroundColor: 'black',
        color: '#FFFFFF',
        fontSize:'12px',
        fontWeight:'bold'
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
                  <h6 className="card-title">{title}</h6>
                  <p>{stars}</p>
                  <p className="card-text">{description}</p>
                  <a
                    className="btn btn-outline-dark mt-auto"
                    href="#"
                    style={{
                    position: "relative",
                    top: "30px",
                    transition: "top 0.5s"  }}
                  >
                    {btn}
                  </a>
                </div>
              </div>
            </div>
           </div>
        </div>
       </div>
    );
  };
  
export default Card;

