import React from "react";
import styled from "styled-components";
import ArtistProfile from "./ArtistProfile";

const Container = styled.div`
  margin: 5rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Heading = styled.div`
  width: 50%;
  color: white;
  font-size: 50px;
  font-weight: 500;
  font-family: "Rubik Glitch", system-ui;
  letter-spacing: 5px;
`;
const Para = styled.p`
  font-family: sans-serif;
  width: 60%;
  color: white;
  font-size: 18px;
`;
const Artist = () => {
  return (
    <Container>
      <Head>
        <Heading>TOP ARTIST</Heading>
        <Para>
          A non-fungible Token is a non-interchangeable unit of data stored on a
          blockchain a form of digital ledger that can be sold & traded
        </Para>
      </Head>
      <ArtistProfile />
    </Container>
  );
};

export default Artist;
