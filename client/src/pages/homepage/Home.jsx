import React from "react";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import Chaur from "../../image/Chaur.png";

import "./home.css";

function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <div className="main-content">
          <div className="main-image">
            <img src={Chaur} alt="shoes" />
          </div>
          <div>
            <p className="story">
              To get started with React Router in a web app, you will need a
              React web app. If you need to create one, we recommend you try
              Create React App. It’s a popular tool that works really well with
              React Router.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
