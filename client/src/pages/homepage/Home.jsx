import React from "react";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import quote from "../../image/quote.png";
import vacation from "../../image/vacation.jpeg";

import "./home.css";

function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <div className="main-content">
          <div className="main-image">
            <img src={quote} alt="quote" />
            <p className="story">
              The best time to act on this was decades ago.
            </p>
            <p className="story">The second best time is now.</p>
          </div>
          <div className="vl"></div>
          <div className="sunrise">
            <img src={vacation} alt="sunrise" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
