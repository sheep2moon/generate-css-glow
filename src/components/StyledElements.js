import styled from 'styled-components';

export const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Slider = styled.input`
  width: 100%;
  margin-bottom: 1rem;
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

export const CopyNotification = styled.div`
  background: #fff;
  color: #000;
  padding: 0.5rem;
  position: absolute;
  top: ${({ notificationText }) => (notificationText ? '1rem' : '-8rem')};
  transition: all 0.3s ease-in;
  left: 50%;
  transform: translateX(-50%);
`;
