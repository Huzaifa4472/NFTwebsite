import React from "react";
import styled from "styled-components";
import binance from "../assets/images/coins.png";
import fire from "../assets/images/fire.png";
import ethereum from "../assets/images/ethereum.png";
import gemini from "../assets/images/gemini.png";
import ripple from "../assets/images/ripple.svg";
const Container = styled.div`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Section = styled.div`
  width: 98%;
  display: flex;
  justify-content: space-around;
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
  filter: brightness(0.5);
`;
const Text = styled.div`
  color: #ff7a0080;
  font-style: Italic;
  font-size: 30px;
  font-weight: 600;
  font-family: "Catamaran", sans-serif;
`;
const Span = styled.span`
  font-size: 30px;
  font-weight: 300;
`;
const Posts = () => {
  const inlineStyle = {
    fontSize: "40px",
  };
  return (
    <Container>
      <Section>
        <Post>
          <Icon src={fire} />
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
          <Icon src={gemini} />
          <Text>GEMINI</Text>
        </Post>
        <Post>
          <Icon src={ethereum} />
          <Text>ETHEREUM</Text>
        </Post>
        <Post>
          <Text style={inlineStyle}>
            bit<Span>square</Span>
          </Text>
        </Post>
      </Section>
    </Container>
  );
};

export default Posts;
