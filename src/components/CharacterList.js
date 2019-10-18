import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";

import CharacterCard from './CharacterCard';
import data from './data';

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
  // const [srvData, setSrvData] = useState([]);
  const [srvData, setSrvData] = useState(data.results);


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

  console.log("From data file:",srvData);

  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      <MyH2Chr>Character Information</MyH2Chr>

      <CardDivChrList>
        {srvData.map( (elem) => 
          <CharacterCard key={elem.id}
          name={elem.name}
          status={elem.status} 
          species={elem.species}
          type={elem.type}
          />
        )}
      </CardDivChrList>

      {/* {srvData.map( (elem) => 
        <CharacterCard key={elem.id}
        name={elem.name}
        status={elem.status} 
        species={elem.species}
        type={elem.type}
        />
      )} */}





      {/* <CharacterCard 
        name={srvData[0].name}
        status={srvData[0].status} 
        species={srvData[0].species}
        type={srvData[0].type}
      /> */}

    </section>
  );
}
