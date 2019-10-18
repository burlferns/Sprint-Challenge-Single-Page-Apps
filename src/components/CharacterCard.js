import React from "react";
import styled from "styled-components";

const MyH3CharCrd =  styled.h3`
  // border:1px solid grey;
  margin:2px 0;
`;

const MyPCharCrd =  styled.p`
  // border:1px solid grey;
  margin:2px 0;
`;


const MyDivCharCrd =  styled.div`
  border:1px solid blue;
  text-align:left;
  width:300px;
  height:120px;
  margin:10px 0;
`;


export default function CharacterCard({name,status,species,type}) {
  // return <span>todo: character</span>;

  return (
    <MyDivCharCrd>
      <MyH3CharCrd>{`Name: ${name}`}</MyH3CharCrd>
      <MyPCharCrd>{`Status: ${status}`}</MyPCharCrd>
      <MyPCharCrd>{`Species: ${species}`}</MyPCharCrd>
      <MyPCharCrd>{`Type: ${type}`}</MyPCharCrd>
    </MyDivCharCrd>
    
  );

}
