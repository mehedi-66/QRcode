import React from "react";
import {  Link } from "react-router-dom";
import Billnav from "./Billnav";
import './Bill.css';

function Bill() {

  return (
    <div className="d-flex">
      <div className  ="leftNav">
        <Billnav></Billnav>
      </div>
      <div className="contentMain"></div>
    </div>
  );
}

export default Bill;
