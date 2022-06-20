import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import google_logo from "../images/google_logo.png";
import Search from "./Search.js";

function Home() {
  return (
    <div className='home'>
      <div className='home_header'>
        <div className='home_headerLeft'>
          <Link to={"/about"}>About</Link>
          <Link to={"/store"}>Store</Link>
        </div>

        <div className='home_headerRight'>
          <Link to={"/gmail"}>Gmail</Link>
          <Link to={"/images"}>Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className='home_body'>
        <img src={google_logo} alt='Google logo'></img>
        <div className='home_inputContainer'>
          <Search hideButtons={false} />
        </div>
      </div>
    </div>
  );
}

export default Home;
