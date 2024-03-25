import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Card from "./Card";
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 7rem;
`;
const Section = styled.div``;
const Heading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Title = styled.div`
  font-family: "Rubik Glitch", system-ui;
  color: white;
  font-size: 43px;
  letter-spacing: 7px;
`;
const Para = styled.div`
  color: white;
  width: 40%;
  text-align: center;
  line-height: 25px;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem 0rem;
`;
const Button = styled(NavLink)`
  color: white;
  font-style: italic;
  text-decoration: none;
  background-color: #111111;
  padding: 10px 20px;
  border-radius: 57px;
  cursor: pointer;
  &.active {
    background-color: #ff7a00;
  }
`;
const Cards = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;
const ArtWork = () => {
  return (
    <Container>
      <Section>
        <Heading>
          <Title>EXPLORE ARTWORK</Title>
          <Para>
            A non-fungible Token is a non-interchangeable unit of data stored on
            a blockchain a form of digital ledger that can be sold & traded
          </Para>
        </Heading>
        <Buttons>
          <Button to={"/"} activeclassname="active">
            ALL ITEMS
          </Button>
          <Button to={"/art"} activeclassname="active">
            ART
          </Button>
          <Button to={"/digital"} activeclassname="active">
            DIGITAL ART
          </Button>
          <Button to={"/music"} activeclassname="active">
            MUSIC
          </Button>
          <Button to={"/video"} activeclassname="active">
            VIDEO
          </Button>
        </Buttons>
      </Section>
      <Cards>
        <Card />
      </Cards>
    </Container>
  );
};

export default ArtWork;
