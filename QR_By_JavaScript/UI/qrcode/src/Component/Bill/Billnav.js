import React from "react";
import {  Link } from "react-router-dom";

function Billnav() {

  return (
      <div>
        <nav className="">
          <div className="navbar-nav">
            <Link to="/billcreate" className="nav-item nav-link">Bill Create</Link>
            <Link to="/billgrid" className="nav-item nav-link">Bills</Link>
            <Link to="/Billsammary" className="nav-item nav-link">Sammary</Link>
          </div>
        </nav>
      </div>
  );
}

export default Billnav;