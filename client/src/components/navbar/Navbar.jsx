import React, { useState } from "react";
import "./navbar.scss";
import SearchRounded from "@mui/icons-material/SearchRounded";
import Notification from "@mui/icons-material/Notifications";
import profileImg from "../../asset/img/beach-palmtrees-1361702.jpg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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
          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
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
