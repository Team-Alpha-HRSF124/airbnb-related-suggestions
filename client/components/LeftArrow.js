import React from 'react';
import styled from 'styled-components';

// styled component
const LeftArrowCanvas = styled.svg`
  position: absolute;
  fill: black;
  left: 3px;
  top: 3px;
`;

const LeftArrow = () => (
  <LeftArrowCanvas xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 20 20">
    <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
  </LeftArrowCanvas>
);

export default LeftArrow;