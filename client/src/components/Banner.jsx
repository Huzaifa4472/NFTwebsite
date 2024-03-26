import React from "react";
import styled from "styled-components";
import Img from "../assets/collection/banner.png";
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
`;
const Section = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 17rem;
  background-color: #0d0d0dcc;
  opacity: 80%;
  border-radius: 20px;
`;
const Data = styled.div`
  width: 65%;
  text-align: center;
  background: transparent;
  padding-left: 2rem;
`;
const Title = styled.div`
  color: white;
  font-family: "Rubik Glitch", system-ui;
  font-size: 40px;
  letter-spacing: 5px;
  background: transparent;
  margin-bottom: 1rem;
  text-align: left;
`;
const Button = styled.div`
  color: white;
  width: 20%;
  padding: 8px;
  border-radius: 30px;
  background-color: #ff7a00;
  font-family: sans-serif;
  font-weight: 600;
  font-size: 20px;
  font-style: italic;
`;
const ImageSection = styled.div`
  width: 30%;
  background: transparent;
`;
const Image = styled.img`
  height: 25rem;
  transform: scaleX(-1);
  background: transparent;
  margin-bottom: 7.8rem;
`;
const Banner = () => {
  return (
    <Container>
      <Section>
        <Data>
          <Title>GET FREE COLLECTION FOR FIRST TRANSACTION</Title>
          <Button>Join now </Button>
        </Data>
        <ImageSection>
          <Image src={Img} />
        </ImageSection>
      </Section>
    </Container>
  );
};

export default Banner;
