import React from "react";
import styled from "styled-components";
import Collection from "./Collection";
import Banner from "./Banner";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;
const Section = styled.div`
  display: flex;
  justify-content: center;
`;
const Title = styled.div`
  letter-spacing: 5px;
  font-size: 50px;
  color: white;
  font-family: "Rubik Glitch", system-ui;
`;
const Collections = () => {
  return (
    <Container>
      <Section>
        <Title>TOP COLLECTIONS</Title>
      </Section>
      <Collection />
      <Banner />
    </Container>
  );
};

export default Collections;
