import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";

import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

//dummy data file to use to avoid triggering the API limit
//Comment out in final version
import dataFromFile from './data';


const MyH2Chr = styled.h2`
  // border:1px solid grey;
  text-align:center;
`;

const CardDivChrList = styled.div`
  display: flex;
  justify-content:space-around;
  flex-wrap:wrap;
  align-items: center;
`;


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [srvData, setSrvData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  

  // useEffect(() => {
  //   // TODO: Add API Request here - must run in `useEffect`
  //   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  //   axios
  //       .get('https://rickandmortyapi.com/api/character/')
  //       .then(response => {
  //         console.log("From srv:",response.data.results);
  //         setSrvData(response.data.results);
          
  //       })
  //       .catch(error => {
  //         console.error('Server Error', error);
  //       });
  // }, []);



  //Dummy code to use to avoid triggering the API limit
  //Comment out in final version
  useEffect(() => {    
    setSrvData(dataFromFile.results);
  }, []);


  useEffect(() => {
    const results = srvData.filter(personData =>
      personData.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm,srvData]);
  
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      <MyH2Chr>Character Information</MyH2Chr>

      <SearchForm
        handleChange={handleChange}
        searchTerm={searchTerm}
      />

      <CardDivChrList>
        {searchResults.map( (elem) => 
          <CharacterCard key={elem.id}
          name={elem.name}
          status={elem.status} 
          species={elem.species}
          type={elem.type}
          />
        )}
      </CardDivChrList>

      

    </section>
  );
}
