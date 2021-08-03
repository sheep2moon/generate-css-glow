import './App.css';
import styled from 'styled-components';
import GlowGenerator from './components/GlowGenerator';
import Hero from './components/Hero';
function App() {
  return (
    <AppContainer>
      <Hero />
      <GlowGenerator />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #090909;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
