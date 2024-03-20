import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import mainOne from "../assets/images/main1.png";
import mainTwo from "../assets/images/main2.jpeg";
import mainThree from "../assets/images/main3.png";
import mainFour from "../assets/images/main4.png";
import mainFive from "../assets/images/main5.png";

const Container = styled.div``;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;
const Head = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Heading = styled.div`
  text-align: center;
  letter-spacing: 10px;
  font-family: "Rubik Glitch", system-ui;
  font-size: 60px;
  color: white;
  font-weight: normal;
`;
const Star = styled(FaStar)`
  margin-right: 90px;
  color: #ff7a00;
  font-size: 15px;
  margin-bottom: 30px;
`;

const SmallImg = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Small = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;
const LargeImg = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`;
const Large = styled.img`
  width: 10rem;
  height: 18rem;
  object-fit: cover;
  border-radius: 172.5px;
  border: 8px solid white;
`;

const Main = () => {
  const inlineStyle = {
    marginBottom: "6rem",
  };
  const iconStyle = {
    transform: "scaleX(-1)",
  };
  return (
    <Container>
      <Section>
        <Head>
          <Heading>
            COLLECT YOUR RARE NFTS <Star></Star>
          </Heading>
        </Head>
        <SmallImg>
          <Small src={mainFive}></Small>
          <Small src={mainFour} style={iconStyle}></Small>
        </SmallImg>
        <LargeImg>
          <Large src={mainOne}></Large>
          <Large src={mainTwo} style={inlineStyle}></Large>
          <Large src={mainThree} style={iconStyle}></Large>
        </LargeImg>
      </Section>
    </Container>
  );
};

export default Main;
