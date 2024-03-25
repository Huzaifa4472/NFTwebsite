import React from "react";
import styled from "styled-components";
import TickLogo from "../assets/card/tick.png";
import ethereum from "../assets/images/ethereum.png";
import Data from "../data/artworkData.js";

const Container = styled.div``;
const Section = styled.div`
  padding: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2.5rem;
`;
const Cards = styled.div`
  display: flex;
  flex-direction: column;
  height: 30rem;
  width: 25%;
  margin-bottom: 4rem;
  border-radius: 10px;
  background-color: #0d0d0dcc;
`;
const Head = styled.div`
  display: flex;
  background: transparent;
  align-items: center;
  gap: 7px;
  margin: 0.6rem;
`;
const Icon = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  border: 1px solid white;
`;
const Heading = styled.div`
  color: white;
  font-style: italic;
  font-weight: 700;
`;
const Tick = styled.img`
  height: 10px;
  width: 10px;
`;
const Img = styled.div`
  margin-bottom: 1.5rem;
`;
const Image = styled.img`
  height: 17rem;
  width: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: transparent;
`;
const Title = styled.div`
  color: white;
  font-style: italic;
  font-weight: 700;
`;
const Button = styled.div`
  font-size: 15px;
  font-family: sans-serif;
  font-weight: 550;
  font-style: italic;
  padding: 8px 15px;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0px 0px 15px 0px #ff7a00;
  color: white;
  background-color: #ff7a00;
`;
const Underline = styled.div`
  height: 2px;
  border-radius: 20px;
  width: 92%;
  margin: 10px 0px;
  background-color: #616161;
`;
const Details = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: transparent;
`;
const Icons = styled.img`
  height: 2rem;
  color: white;
  background: transparent;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
`;
const UpperText = styled.div`
  color: #4a4a4a;
  font-size: 20px;
  font-style: italic;
  font-weight: 700;
  margin-bottom: 5px;
`;
const LowerText = styled.div`
  color: white;
  font-family: "Rubik Glitch", system-ui;
  font-weight: 400;
  font-size: 15px;
`;
const Time = styled.div`
  color: #ff7a00;
  font-size: 20px;
  letter-spacing: 1px;
  font-family: "Rubik Glitch", system-ui;
`;
const Card = () => {
  return (
    <Container>
      <Section>
        {Data.map((item) => (
          <Cards>
            <Head key={item.id}>
              <Icon src={item.profileImg} />
              <Heading>{item.name}</Heading>
              <Tick src={TickLogo} />
            </Head>
            <Img>
              <Image src={item.mainImg} />
            </Img>
            <Info>
              <Title>KAPE BEAST</Title>
              <Button>AUCTION</Button>
            </Info>
            <Underline></Underline>
            <Details>
              <Icons src={ethereum} />
              <Text>
                <UpperText>NCEST 50</UpperText>
                <LowerText>{item.value}</LowerText>
              </Text>
              <Time>{item.time}</Time>
            </Details>
          </Cards>
        ))}
      </Section>
    </Container>
  );
};

export default Card;
