import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => (
  <div className="home-item">
    <h3>
      Please <Link to="/signup">Sign Up </Link>
      OR
      <Link to="/login"> Log In</Link>
    </h3>
  </div>
);

export default Home;
