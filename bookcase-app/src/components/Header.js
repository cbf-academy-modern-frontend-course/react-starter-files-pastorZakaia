import React, { useState, useEffect } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
// import { useLocation } from 'react-router-dom';
// import PageTitle from
// import styled from 'styled-components';

function Header() {
  return (
    <>
      <h1> My e-Bookcase</h1>
      <Link to="/">Home</Link>
      <Link to="/bookcase" className="bookLink">
        Bookcase
      </Link>
    </>
  );
}
export default Header;
