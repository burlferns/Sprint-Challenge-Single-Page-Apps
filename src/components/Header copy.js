import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const StyledLink = styled(Link)`
  color:orange;
  text-decoration:none;

`;

const HeaderNav = styled.nav`

`;



function HeaderNav() {
  return (
    <nav>
      <StyledLink to='/' >Home</StyledLink>
      <StyledLink to='/char'>Characters</StyledLink>
    </nav>
  );
}





// const StyledNav = styled(MyNav)`



// `;



export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <HeaderNav>
        {/* <Link to='/' className="homeNav">Home</Link>
        <Link to='/char'className="charNav">Characters</Link> */}

        <StyledLink to='/' >Home</StyledLink>
        <StyledLink to='/char'>Characters</StyledLink>


      </HeaderNav>
    </header>
  );
}
