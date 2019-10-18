import React from "react";
import {Route} from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";


// const StyledLink = styled(Link)`
//   color:white;
//   text-decoration:none;
//   font-size:20px;
//   border:1px solid orange;
//   background-color:orange;
//   border-radius:4px;
//   padding:10px;

// `;


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/char" component={CharacterList}/>

      {/* <WelcomePage/>
      <CharacterList/> */}
    </main>
  );
}
