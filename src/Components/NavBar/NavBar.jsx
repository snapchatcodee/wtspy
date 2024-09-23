import React, { Component } from "react";
import "./NavBar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <i>
            <img src="/wp.png" alt="logo" />
          </i>
        </h1>
        <h1 className="navbar-title">مجموع ة الواتساب</h1>
      </nav>
    );
  }
}

export default Navbar;
