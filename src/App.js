import './App.css';
import styled from 'styled-components';
import NeonGenerator from './components/NeonGenerator';
import Hero from './components/Hero';
function App() {
  return (
    <AppContainer>
      <Hero />
      <NeonGenerator />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
