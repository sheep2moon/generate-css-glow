import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroContainer>
      <Title>Neon Generator</Title>
      <Info>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        corporis beatae dolor voluptatem neque eum fugit sapiente iste ad
        consequatur.
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
  animation: neon 8s ease-in-out infinite;
  font-weight: 700;
  color: transparent;
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 2rem;
  @media screen and (max-width: 900px) {
    font-size: 2.5rem;
  }
`;
const Info = styled.p`
  text-align: center;
  padding: 1rem;
  max-width: 400px;
`;
