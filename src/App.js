import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Intro from "./components/body/body";
import Card from "./components/Cards/cards";
import Footer from "./components/Footer/footer";

function App() {
  const starStyle = {
    color: "gold",
    fontSize: "15px",
    position: "relative",
    left: "50px",
  };

  const [cart, setCart] = useState([]);

  const addToCart = (itemId) => {
    setCart([...cart, itemId]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((itemId) => itemId !== id));
  };

  console.log(cart);

  return (
    <div className="App">
        <div className="container ">
        <div className="row">
          <div className="col-md-12 col-2sm-12 col-lg-12 ">
      <Header cartCount={cart.length} />
      </div>
      </div>
      </div>
      <div className="container  ">
        <div className="row">
          <div className="col-md-12  col-sm-12 col-lg-12 ">
      <Intro />
      </div>
      </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <Card
              imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              title={<b>Fancy Product</b>}
              description="$40.00 - $80.00"
              stars={<br />}
              btn="Add to Cart"
              id={"1"}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Card
              imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              title={<b>Special Item</b>}
              stars={
                <span>
                  <i className="fas fa-star" style={starStyle}></i>
                  <i className="fas fa-star" style={starStyle}></i>
                  <i className="fas fa-star" style={starStyle}></i>
                  <i className="fas fa-star" style={starStyle}></i>
                  <i className="fas fa-star" style={starStyle}></i>
                </span>
              }
              sale="Sale"
              description={<span><strike>$30.00</strike>   $18.00</span>}
              btn="Add to Cart"
              id={"2"}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Card
              imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              title={<b>Sale Item</b>}
              description={<span><strike>$50.00 </strike>  $25.00</span>}
              stars={<br />}
              btn="Add to Cart"
              sale="Sale"
              id={"3"}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Card
              imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              title={<b>Popular Item</b>}
              stars={
                <span>
                  <i className="fas fa-star" style={starStyle}></i>
                  <i className="fas fa-star" style={starStyle}></i>
                  <i className="fas fa-star" style={starStyle}></i>
                  <i className="fas fa-star" style={starStyle}></i>
                  <i className="fas fa-star" style={starStyle}></i>
                </span>
              }
              description="$40.00"
              btn="Add to Cart"
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              id={"4"}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <Card
              imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              title={<b>Sale Item</b>}
              sale="Sale"
              description="$50.00 - $90.00"
              stars={<br />}
              btn="Add to Cart"
              id={"5"}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Card
              imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              title={<b>Fancy Product</b>}
              description="$120.00 - $280.00"
              stars={<br />}
              btn="Add to Cart"
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              id={"8"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Card
              imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              title={<b>Popular Item</b>}
              description="$40.00"
              stars={
                <span>
                  <i className="fas fa-star" style={starStyle}></i>
                  <i className="fas fa-star" style={starStyle}></i>
                  <i className="fas fa-star" style={starStyle}></i>
                  <i className="fas fa-star" style={starStyle}></i>
                  <i className="fas fa-star" style={starStyle}></i>
                </span>
              }
              btn="Add to Cart"
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              id={"6"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Card
              imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              title={<b>Special Item</b>}
              stars={
                <span>
                  <i className="fas fa-star" style={starStyle}></i>
                  <i className="fas fa-star" style={starStyle}></i>
                  <i className="fas fa-star" style={starStyle}></i>
                  <i className="fas fa-star" style={starStyle}></i>
                  <i className="fas fa-star" style={starStyle}></i>
                </span>
              }
              sale="Sale"
              description={<span><strike>$50.00 </strike>  $25.00</span>}
              btn="Add to Cart"
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              id={"7"}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
