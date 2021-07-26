import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { CopyNotification, Slider, SliderContainer } from './StyledElements';

const NeonGenerator = () => {
  const [hueValue, setHueValue] = useState(0);
  const [size, setSize] = useState(20);
  const [notificationText, setNotificationText] = useState('');
  const codeRef = useRef();

  const handleColorChange = (e) => {
    setHueValue(e.target.value);
    console.log(e.target.value);
  };
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleCopy = () => {
    console.log(codeRef);
    navigator.clipboard.writeText(codeRef.current.innerText);
    setNotificationText('Copyied to clipboard');
    setTimeout(() => {
      setNotificationText('');
    }, 2000);
  };

  return (
    <NeonContainer>
      <SliderContainer>
        <h2>color</h2>
        <Slider
          type='range'
          min='1'
          max='360'
          onMouseUp={(e) => handleColorChange(e)}
          onTouchEnd={(e) => handleColorChange(e)}
          hueValue={hueValue}
          colorBg={true}
        />
        <h2>size</h2>
        <Slider
          type='range'
          min='5'
          max='100'
          onMouseUp={(e) => handleSizeChange(e)}
          onTouchEnd={(e) => handleSizeChange(e)}
        />
      </SliderContainer>
      <CodeContainer hueValue={hueValue} size={size} onClick={handleCopy}>
        <pre ref={codeRef}>
          {`
                0 0 ${size}px hsl(${hueValue},100%,40%),
                0 0 ${Math.floor(size / 1.5)}px hsl(${hueValue},100%,50%), 
                0 0 ${Math.floor(size / 2)}px hsl(${hueValue},100%,65%), 
                0 0 ${Math.floor(size / 2.5)}px hsl(${hueValue},100%,80%), 
                0 0 ${Math.floor(size / 3)}px hsl(${hueValue},100%,90%), 
                0 0 ${Math.floor(size / 3.5)}px hsl(${hueValue},100%,100%);
              `}
        </pre>
      </CodeContainer>
      <CopyNotification notificationText={notificationText}>
        <p>{notificationText}</p>
      </CopyNotification>
    </NeonContainer>
  );
};

export default NeonGenerator;

const NeonContainer = styled.div`
  flex: 0.6;
  max-width: 500px;
  padding: 1rem;
`;

const CodeContainer = styled.div`
  background: #ffffff10;
  padding: 1rem;
  opacity: 0.9;
  box-shadow: ${({ hueValue, size }) => `
  0 0 ${size}px hsl(${hueValue},100%,40%),
  0 0 ${Math.floor(size / 1.5)}px hsl(${hueValue},100%,50%),
  0 0 ${Math.floor(size / 2)}px hsl(${hueValue},100%,65%),
  0 0 ${Math.floor(size / 2.5)}px hsl(${hueValue},100%,80%),
  0 0 ${Math.floor(size / 3)}px hsl(${hueValue},100%,90%),
  0 0 ${Math.floor(size / 3.5)}px hsl(${hueValue},100%,100%)
  `};
  :hover {
    cursor: pointer;
    opacity: 1;
  }
  > pre {
    display: block;
    white-space: pre-line;
  }
`;
