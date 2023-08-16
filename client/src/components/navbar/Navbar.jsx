import React, { useState } from "react";
import "./navbar.scss";
import SearchRounded from "@mui/icons-material/SearchRounded";
import Notification from "@mui/icons-material/Notifications";
import profileImg from "../../asset/img/beach-palmtrees-1361702.jpg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setScrolled] = useState(false);

  window.onscroll = () => {
    setScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="netflix logo"
          />
          <Link to="/" className="link">
            <span>Home</span>
          </Link>
          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <SearchRounded className="icon" />
          <span>KID</span>
          <Notification className="icon" />
          <img src={profileImg} alt="profile" />
          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
