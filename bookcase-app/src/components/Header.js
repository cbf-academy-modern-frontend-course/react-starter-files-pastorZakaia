import React, { useState, useEffect } from "react";
import Search from "./Search";

// import { useLocation } from 'react-router-dom';
// import PageTitle from
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <h1> My Bookcase</h1>
      <Link to="/">Home</Link>
      <Link to="/bookcase" className="bookLink">
        Bookcase
      </Link>
    </>
  );
}
export default Header;
