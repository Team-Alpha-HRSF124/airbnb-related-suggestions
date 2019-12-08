import React from 'react';
import styled from 'styled-components';

// styled component
const RightArrowCanvas = styled.svg`
  position: absolute;
  fill: black;
  right: 7px;
  top: 3px;
`;

const RightArrow = () => (
  <RightArrowCanvas xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 20 20">
    <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
  </RightArrowCanvas>
);

export default RightArrow;