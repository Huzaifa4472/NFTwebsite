import React from "react";
import styled from "styled-components";
import aboutOne from "../assets/images/aboutOne.png";
import aboutTwo from "../assets/images/aboutTwo.png";

const Container = styled.div`
  postion: relative;
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  padding: 15px;
`;
const Section = styled.div`
  display: flex;
  width: 100%;
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
`;
const LeftArrange = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const OverlayOne = styled.img`
  height: 15rem;
  width: 12rem;
  object-fit: cover;
  position: absolute;
  border-radius: 30px;
  margin-left: 10rem;
  margin-top: 11rem;
  z-index: 2;
`;
const OverlayTwo = styled.img`
  height: 17rem;
  width: 14rem;
  object-fit: cover;
  position: absolute;
  border-radius: 30px;
  margin-right: 13rem;
  margin-bottom: 10rem;
`;

const OuterBox = styled.div`
  height: 90%;
  width: 40%;
  border: 5px solid #ff7a00;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InnerBox = styled.div`
  height: 80%;
  width: 70%;
  border: 5px solid #ff7a00;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: left;
  flex-direction: column;
  padding: 50px;
  gap: 55px;
`;
const Title = styled.div`
  width: 70%;
  font-family: "Rubik Glitch", system-ui;
  color: white;
  font-size: 43px;
  line-height: 50px;
  letter-spacing: 5px;
`;
const Para = styled.p`
  width: 65%;
  color: white;
  line-height: 25px;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  width: 7rem;
  font-size: 16px;
  padding: 8px 10px;
  color: white;
  background-color: #ff7a00;
  border-radius: 40px;
  box-shadow: 0px 0px 15px 0px #ff7a00;
  border: 1px solid #ff7a00;
`;
const About = () => {
  return (
    <Container>
      <Section>
        <Left>
          <LeftArrange>
            <OverlayOne src={aboutTwo} />
            <OuterBox>
              <InnerBox></InnerBox>
            </OuterBox>
            <OverlayTwo src={aboutOne} />
          </LeftArrange>
        </Left>
        <Right>
          <Title>WHY WE ARE DIFFERENT WITH OTHERS</Title>
          <Para>
            We are first marketplace that allow user to sell their own NFT. You
            can buy and sell your NFT with the best deal here. Plocde your Bid
            and start your trade
          </Para>
          <Buttons>
            <Button>Read more</Button>
          </Buttons>
        </Right>
      </Section>
    </Container>
  );
};

export default About;
