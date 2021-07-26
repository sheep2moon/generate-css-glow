import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroContainer>
      <Title>Glow Generator</Title>
      <Info>
        Generate CSS box-shadow or text-shadow code to create glow effect.
      </Info>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  flex: 0.4;
  padding: 1rem;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  font-weight: 200;
  color: #ffeb52;
  font-family: 'Orbitron';
  margin-bottom: 2rem;
  text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ffd644, 0 0 0.5em #ffd644,
    0 0 0.1em #ffd644, 0 10px 3px #000;
  @media screen and (max-width: 900px) {
    font-size: 2.5rem;
  }
`;
const Info = styled.p`
  text-align: center;
  font-size: 1.4rem;
  padding: 1rem;
  max-width: 500px;
`;
