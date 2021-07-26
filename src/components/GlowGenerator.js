import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { CopyNotification, Slider, SliderContainer } from './StyledElements';

const GlowGenerator = () => {
  const [hueValue, setHueValue] = useState(0);
  const [size, setSize] = useState(40);
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
    setNotificationText('Copied to clipboard');
    setTimeout(() => {
      setNotificationText('');
    }, 2000);
  };

  return (
    <GlowContainer>
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
          max='200'
          defaultValue={50}
          onMouseUp={(e) => handleSizeChange(e)}
          onTouchEnd={(e) => handleSizeChange(e)}
        />
      </SliderContainer>
      <CodeContainer hueValue={hueValue} size={size} onClick={handleCopy}>
        <pre ref={codeRef}>
          {`
                0 0 ${size * 2}px hsl(${hueValue},100%,40%),
                0 0 ${size}px hsl(${hueValue},100%,50%), 
                0 0 ${Math.floor(size / 2)}px hsl(${hueValue},100%,60%),
                0 0 ${size * 2}px #ffffff50;
              `}
        </pre>
      </CodeContainer>
      <CopyNotification notificationText={notificationText}>
        <p>{notificationText}</p>
      </CopyNotification>
    </GlowContainer>
  );
};

export default GlowGenerator;

const GlowContainer = styled.div`
  flex: 0.6;
  max-width: 500px;
  padding: 1rem;
`;

const CodeContainer = styled.div`
  background: #ffffff10;
  border-radius: 0.5rem;
  margin-top: 3rem;
  box-shadow: ${({ hueValue, size }) => `
  0 0 ${size * 2}px  hsl(${hueValue},100%,40%),
  0 0 ${size}px hsl(${hueValue},100%,50%),
  0 0 ${size / 2}px hsl(${hueValue},100%,60%),
  0 0 ${size * 2}px #ffffff50
  
  `};

  > pre {
    padding: 1rem;
    display: block;
    white-space: pre-line;
    :hover {
      cursor: pointer;
      background: #ffffff10;
    }
  }
`;
