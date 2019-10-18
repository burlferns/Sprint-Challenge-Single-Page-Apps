import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const StyledLinkHdr = styled(Link)`
  color:white;
  text-decoration:none;
  font-size:16px;
  border:1px solid orange;
  background-color:orange;
  border-radius:4px;
  padding:10px;

`;

const NavHdr = styled.nav`
  display:flex;
  justify-content:space-around;
`;

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <NavHdr>

        <StyledLinkHdr to='/' >Home</StyledLinkHdr>
        <StyledLinkHdr to='/char'>Characters</StyledLinkHdr>

      </NavHdr>
    </header>
  );
}
