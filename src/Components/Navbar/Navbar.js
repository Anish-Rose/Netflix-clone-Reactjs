import React from "react";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const transition = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else setScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transition);
    return () => window.removeEventListener("scroll", transition);
  }, []);
  return (
    <div className={`nav ${scroll && "nav_black"}`}>
      <Link to="/">
        <img
          className="nav_logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="Netflix Logo"
        />
      </Link>

      <Link to="/profile">
        <img
          className="avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="user"
        />
      </Link>
    </div>
  );
};

export default Navbar;
