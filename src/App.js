import './App.css';
import Header from "./components/header/header"
import Intro from './components/body/body'
import Card from './components/Cards/cards';
function App() {
  const starStyle = {
    color: "gold",  // Set the color to goldenrod
    fontSize: "15px"     // Set the font size to 24px
  };
  return (
    <div className="App">
    <Header />
    <Intro />
   
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="d-flex justify-content-between">
            <Card
              imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              title={<b>Fancy Product</b>}
              description="$40.00 - $80.00"
              stars={<br></br>}
              btn="View Options"
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
              sale='Sale'
         
              description={<span><strike>$20.00</strike>   $18.00</span>}
              btn="Add to Cart"
            />
            <Card
              imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              title={<b>Sale Item</b>}
              description={<span><strike>$50.00 </strike>  $25.00</span>}
              stars={<br></br>}
              btn="Add to Cart"
              sale='Sale'
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
            />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-3">
          <div className="d-flex justify-content-between">
            <Card
              imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              title={<b>Sale Item</b>}
              description={<span><strike>$50.00 </strike>  $25.00</span>}
              stars={<br></br>}
              btn="Add to Cart"
              sale='Sale'
            />
            <Card
              imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              title={<b>Fancy Product</b>}
              stars={<br></br>}
              description="$40.00 - $80.00"
              btn="View Options"
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
              description={<span><strike>$20.00</strike>   $18.00</span>}
              btn="Add to Cart"
              sale='Sale'

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
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
