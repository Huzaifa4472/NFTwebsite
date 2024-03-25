import React from "react";

import Data from "../data/artistData";

import styled from "styled-components";
const Container = styled.div`
  margin-top: 5rem;
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0rem 3rem;
`;
const Card = styled.div`
  padding: 2rem 0rem;
  background-color: #0d0d0dcc;
  width: calc(33.33% - 1.5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;
const ImageSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  width: 95%;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 15px;
  height: 180px;
  width: 180px;
`;
const Info = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  background-color: #0d0d0dcc;
`;
const Title = styled.div`
  color: white;
  font-size: 28px;
  letter-spacing: 3px;
  font-family: "Rubik Glitch", system-ui;
  background-color: #0d0d0dcc;
`;
const User = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-style: italic;
  font-size: 20px;
  background-color: #0d0d0dcc;
`;
const Work = styled.div`
  flex: 1;
  background: transparent;
  background-color: #0d0d0dcc;
`;
const WorkName = styled.div`
  color: white;
  margin-bottom: 0.4rem;
  background-color: #0d0d0dcc;
`;
const WorkUser = styled.div`
  color: white;
  background-color: #0d0d0dcc;
`;
const Follower = styled.div`
  flex: 1;
  background-color: #0d0d0dcc;
`;
const FollowerName = styled.div`
  color: white;
  margin-bottom: 0.4rem;
  background-color: #0d0d0dcc;
`;
const FollowerUser = styled.div`
  color: white;
  background-color: #0d0d0dcc;
`;
const Following = styled.div`
  flex: 1;
  background-color: #0d0d0dcc;
`;
const FollowingName = styled.div`
  color: white;
  margin-bottom: 0.4rem;
  background-color: #0d0d0dcc;
`;
const FollowingUser = styled.div`
  color: white;
  background-color: #0d0d0dcc;
`;
const Button = styled.div`
  font-size: 25px;
  width: 90%;
  padding: 0.3rem 0rem;
  font-style: italic;
  font-weight: 700;
  border-radius: 50px;
  background-color: #ff7a00;
  text-align: center;
  background: transparent;
  color: #ff7a00;
  border: 1px solid #ff7a00;
  font-family: sans-serif;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: 0px 0px 10px 0px #ff7a00;
  &:hover {
    color: white;
    background-color: #ff7a00;

    transition: 0.3s all ease-in-out;
  }
`;
const ArtistProfile = () => {
  const inlineStyle = {
    position: "absolute",
    height: "9rem",
    width: "9rem",
    borderRadius: "100%",
    objectFit: "cover",
    border: "3px solid black",
  };
  return (
    <Container>
      <Section>
        {Data.map((item) => (
          <Card>
            <ImageSection>
              <Image src={item.imgOne} />
              <Image src={item.imgTwo} />
              <Image src={item.imgThree} />
              <Image src={item.imgFour} />
              <Image src={item.imgFive} style={inlineStyle} />
            </ImageSection>
            <Info>
              <Title>{item.title}</Title>
              <User>
                <Work>
                  <WorkName>Artwork</WorkName>
                  <WorkUser>70</WorkUser>
                </Work>
                <Follower>
                  <FollowerName>Followers</FollowerName>
                  <FollowerUser>32</FollowerUser>
                </Follower>
                <Following>
                  <FollowingName>Following</FollowingName>
                  <FollowingUser>54</FollowingUser>
                </Following>
              </User>
            </Info>
            <Button>Follow</Button>
          </Card>
        ))}
      </Section>
    </Container>
  );
};

export default ArtistProfile;
