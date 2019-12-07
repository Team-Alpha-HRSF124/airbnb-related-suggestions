import React from 'react';
import styled from 'styled-components';

// styled components
const MainContainer = styled.div`
  position: relative;
  top: 70%;
  margin: auto;
  width: 120px;
  height: 25px;
  clip-path: inset(0px, 0px, 0px, 0px);
`;

const DotContainer = styled.div`
  position: absolute;
  margin: auto;
  width: 100%;
  z-index: 0;
  display: flex;
  height: 100%;
  transition: 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;

const Dot = styled.svg`
  text-align: center;
  transition: transform 200ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  flex: 1;
  ${ props => {
    if (props.focused) {
      return 'transform: scale(2.0)';
    }
  } }
`;


// React component
const DotMap = (props) => {
  const { pictureArrayLength, currentIndex } = props;
  const dotArray = new Array(pictureArrayLength).fill(0);

  return (
    <MainContainer>
      <DotContainer>  
        {
          dotArray.map((dot, index) => (
            <Dot key={index} focused={index === currentIndex}>
              <circle cx="50%" cy="50%" r="2px" fill="black"/>
            </Dot>
          ))
        }
      </DotContainer>
    </MainContainer>
  )
}

export default DotMap;