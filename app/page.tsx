"use client";

import styled from "styled-components";

import {useState} from "react";
import Link from "next/link";


const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30vh;
    width: 90vw; 
    max-width: 500px; 
    background-color: #389ea1;
    text-align: center;
    margin: auto;
    margin-top: 10vh;
    border-radius: 20px;
    padding: 2rem;

    @media screen and (max-width: 750px) {
        width: 60vw;
        height: 40vh;
        padding: 2.5rem;
    }
    
`;

const StyledH1 = styled.h1`
    font-size: calc(16px + 1.5vw);
    color: #ffffff;
    margin-bottom: 1rem;
`;

const StyledP = styled.p`
    font-size: calc(10px + 1vw);
    color: #f0f0f0;
    margin-bottom: 1.5rem;
`;

const StyledInput = styled.input`
    width: 80%;
    max-width: 300px;
    border-radius: 20px;
    padding: 15px;
    font-size: 1rem;
    margin-bottom: 1rem;
    border: 2px solid #ffffff;
    outline: none;
    text-align: center;

    @media screen and (max-width: 750px) {
        padding: 18px;
    }

`;

const NavLink = styled(Link)`
    background-color: #ccc7c7;
    border-radius: 20px;
    text-decoration: none;
    color: #333;
    padding: 15px;
    font-size: 1rem;
    transition: transform 0.3s ease;
    width: 80%;
    max-width: 200px;
    text-align: center;

    &:hover {
        transform: scale(1.07);
        z-index: 2;
    }
`;

export default function Home() {

    const [city, setCity] = useState("");

  return (
      <StyledDiv>
          <StyledH1>Find the Weather in Any City!</StyledH1>
          <StyledP>Enter a city name below to get the current weather</StyledP>
          <StyledInput type="text" value={city} placeholder={"City name"} onChange={(e) => setCity(e.target.value)}/>
          <NavLink href={`/${city}`}>Get Weather</NavLink>
      </StyledDiv>
  );
}
