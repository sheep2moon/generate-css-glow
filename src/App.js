import './App.css';
import styled from 'styled-components';
import { useState } from 'react';
function App() {
  const [hueValue, setHueValue] = useState(0);
  const [size, setSize] = useState(20);

  const handleColorChange = (e) => {
    setHueValue(e.target.value);
    console.log(e.target.value);
  };
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <AppContainer>
      <SliderContainer>
        <Slider
          type='range'
          min='1'
          max='360'
          onMouseUp={(e) => handleColorChange(e)}
          onTouchEnd={(e) => handleColorChange(e)}
          hueValue={hueValue}
          colorBg={true}
        />
        <Slider
          type='range'
          min='5'
          max='100'
          onMouseUp={(e) => handleSizeChange(e)}
          onTouchEnd={(e) => handleSizeChange(e)}
        />
      </SliderContainer>
      <Box hueValue={hueValue} size={size} />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
`;
const SliderContainer = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
const Slider = styled.input`
  width: 100%;
  margin-top: 2rem;
  background: transparent;
  -webkit-appearance: none;
  ::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    background: ${({ colorBg }) =>
      colorBg
        ? `linear-gradient(
      to right,
      #ff0000 0%,
      #ffff00 17%,
      #00ff00 33%,
      #00ffff 50%,
      #0000ff 67%,
      #ff00ff 83%,
      #ff0000 100%
    )`
        : '#fff'};
    border-radius: 5px;
    height: 18px;
  }
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-top: -5px;
    border: 2px solid #fff;
    background-color: ${({ hueValue }) =>
      hueValue ? `hsl(${hueValue},100%,50%)` : '#aaa'};
  }
`;
const Box = styled.div`
  border-radius: 0.5rem;
  margin-top: 5rem;
  width: 300px;
  height: 50px;
  box-shadow: ${({ hueValue, size }) => `
  0 0 ${size}px hsl(${hueValue},100%,40%),
  0 0 ${Math.floor(size / 1.4)}px hsl(${hueValue},100%,50%),
  0 0 ${Math.floor(size / 1.8)}px hsl(${hueValue},100%,60%),
  0 0 ${Math.floor(size / 2.3)}px hsl(${hueValue},100%,70%),
  0 0 ${Math.floor(size / 2.8)}px hsl(${hueValue},100%,85%),
  0 0 ${Math.floor(size / 6.3)}px hsl(${hueValue},100%,100%)
  `};
`;
