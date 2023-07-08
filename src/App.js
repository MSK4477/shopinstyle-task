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
  };

  const [cart, setCart] = useState([]);

  const addToCart = (itemId) => {
    setCart([...cart, itemId]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((itemId) => itemId !== id));
  };
  
console.log(cart)
  return (
    <div className="App">
      <Header cartCount={cart.length} />
      <Intro />

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="d-flex justify-content-between">
              <Card
                imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                title={<b>Fancy Product</b>}
                description="$40.00 - $80.00"
                stars={<br />}
                btn="View Options"
                id={"1"}
              />
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
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                id={"2"}
              />
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
        </div>
        <div className="row mt-6">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="d-flex justify-content-between">
              <Card
                imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                title={<b>Sale Item</b>}
                sale="Sale"
                description="$50.00 - $90.00"
                stars={<br />}
                btn="Add to Cart"
                id={"5"}
              />
              <Card
                imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                title={<b>Fancy Product</b>}
                description="$120.00 - $280.00"
                stars={<br />}
                btn="View Options"
                id={"8"}
              />
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
      </div>
      <Footer />
    </div>
  );
}

export default App;
