import React from "react";
import styled from "styled-components";
const Container = styled.div``;
const Section = styled.div``;
const Heading = styled.div`
  color: white;
  font-family: "Glitch";
  font-weight: normal;
  font-size: 30px;
`;
const SmallImg = styled.div``;
const Small = styled.img``;
const LargeImg = styled.div``;
const Large = styled.img``;

const Main = () => {
  return (
    <Container>
      <Section>
        <Heading>COLLECT YOUR RARE NFTS</Heading>
        <SmallImg>
          <Small></Small>
          <Small></Small>
        </SmallImg>
        <LargeImg>
          <Large></Large>
          <Large></Large>
        </LargeImg>
      </Section>
    </Container>
  );
};

export default Main;
