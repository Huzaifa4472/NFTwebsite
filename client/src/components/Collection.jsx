import React from "react";
import styled from "styled-components";
import data from "../data/collectionData.js";
const Container = styled.div`
  margin-top: 7rem;
  color: white;
  display: flex;
  justify-content: center;
`;
const Widget = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 35px;
`;
const Section = styled.div`
  padding: 1rem 10rem 1rem 1rem;
  display: flex;
  gap: 15px;
  align-items: center;
  background-color: #0d0d0dcc;
`;

const Id = styled.div`
  color: #ff7a00;
  background: transparent;
`;
const Icon = styled.img`
  height: 3.5rem;
  border-radius: 100%;
`;
const Text = styled.div`
  background: transparent;
  display: flex;
  justify-content: space-around;
  height: 100%;
  flex-direction: column;
`;
const Title = styled.div`
  background: transparent;
`;
const Value = styled.div`
  background: transparent;
  color: #ff7a00;
`;
const Collection = () => {
  return (
    <Container>
      <Widget>
        {data.map((item) => (
          <Section>
            <Id>0{item.id}</Id>
            <Icon src={item.icon} />
            <Text>
              <Title>{item.title}</Title>
              <Value>{item.value}</Value>
            </Text>
          </Section>
        ))}
      </Widget>
    </Container>
  );
};

export default Collection;
