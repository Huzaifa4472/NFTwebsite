import React from "react";
import styled from "styled-components";
const Container = styled.div`
  margin-top: 7rem;
  color: white;
  font-style: italic;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 50%;
`;

const Section = styled.div`
  width: 90%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;
`;
const UnderLine = styled.div`
  background-color: #ffffff;
  height: 2px;
  width: 90%;
  display: flex;
  justify-content: center;
`;
const Data = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div``;
const DataOne = styled.div``;
const Right = styled.div`
  display: flex;
  gap: 20px;
`;
const DataThree = styled.div``;
const DataFour = styled.div``;
const Footer = () => {
  return (
    <Container>
      <Section>
        <UnderLine></UnderLine>
        <Data>
          <Left>
            <DataOne>@2023NFT All rights reserved</DataOne>
          </Left>
          <Right>
            <DataThree>Terms or Agreements</DataThree>
            <DataFour>Privacy Policy</DataFour>
          </Right>
        </Data>
      </Section>
    </Container>
  );
};

export default Footer;
