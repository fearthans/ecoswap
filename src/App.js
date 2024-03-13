import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './Header';
import './style.css';

function App() {
  return (
    <div classname="App">
      <div className="body">
        <img
              src="./sampah.png"
              alt="rectangle"
              width={1920}
              height={878.16845703125}
              className="background"
            />
        <div className="container">
          
          <div className="header">
            <div className="brand">
              <img
                src="logo-ecoswap.png"
                alt="instance"
                width={48}
                height={66.16851043701172}
                className="brand-icon"
              />
              <div className="brand-nama">
                <p className="brand-nama-text">EcoSwap</p>
              </div>
            </div>
            <div className="persuade">
              <p className="persuade-text">
                WELCOME, Ready to start a SWAPPING ?
              </p>
            </div>
            <div className="navbar">
                <div className="item active">
                  <p className="item-text">Home</p>
                </div>
              <div className="dot"/>
              <div className="item">
                <p className="item-text">About</p>
              </div>
              <div className="dot"/>
              <div className="item">
                <p className="item-text">Services</p>
              </div>
              <div className="dot"/>
              <div className="item">
                <p className="item-text">Contact Us</p>
              </div>
              <div className="dot"/>
                <div className="item login active">
                  <p className="item-text">Login</p>
                </div>
            </div>
          </div>
          
          <div className="main">
            <div className="quote-box">
            <img
              src="./quote.png"
              alt="quote"
              className="quote"
            />
            </div>
            <div className="side-explain">
              <p className="description">
                &quot;EcoSwap facilitates waste management by connecting
                companies to sell their waste for reuse and recycling,
              <br/>
                reducing landfill waste and promoting resource utilization. Our
                platform fosters environmental responsibility while creating
                economic opportunities through sustainable business
                practices.&quot;
              </p>

              <p className="swapping">Start Swapping Now !</p>
              
              <div className="buttonning">
                <div className="be">
                  <p className="text-be">Be Seller</p>
                  <img
                    src="./people.png"
                    alt="people icon"
                  />
                </div>
                <div className="be buyer">
                  <p className="text-be buyer">Be Buyer</p>
                  <img
                    src="./cart.png"
                    alt="cart icon"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="search">
            <img
              src="./search.png"
              alt="instance"
              width={24}
              height={24}
              className="search-img"
            />
              <p className="search-text">
                Trying to find something...?
              </p>
            <input/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
