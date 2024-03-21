import React from "react";
import styled from "styled-components";
import binance from "../assets/images/coins.png";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Section = styled.div`
  width: 98%;
  display: flex;
  justify-content: space-between;
  border: 1px solid white;
`;
const Post = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const Icon = styled.img`
  color: #ff7a0080;
  font-size: 40px;
  width: 40px;
  height: 40px;
`;
const Text = styled.div`
  color: #ff7a0080;
  font-style: Italic;
  font-size: 30px;
`;
const Sponsor = () => {
  return (
    <Container>
      <Section>
        <Post>
          <Icon></Icon>
          <Text>HUOBI</Text>
        </Post>
        <Post>
          <Icon src={ripple} />
          <Text>ripple</Text>
        </Post>
        <Post>
          <Icon src={binance} />
          <Text>BINANCE</Text>
        </Post>
        <Post>
          <Icon />
          <Text>GEMINI</Text>
        </Post>
        <Post>
          <Icon />
          <Text>ETHEREUM</Text>
        </Post>
        <Post>
          <Icon />
          <Text>bitsquare</Text>
        </Post>
      </Section>
    </Container>
  );
};

export default Sponsor;
