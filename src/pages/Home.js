import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/bella.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Bella Beauty Salon </h1>
        <p> Why care when Bella's there</p>
        <Link to="/menu">
          <button> Book now </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
