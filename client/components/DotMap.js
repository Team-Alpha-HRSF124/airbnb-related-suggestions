import React from 'react';
import styled from 'styled-components';

// styled components
const MainContainer = styled.div`
  position: absolute;
  top: 90%;
  margin: auto;
  width: 120px;
  height: 15px;
  clip-path: inset(0px, 0px, 0px, 0px);
`;

const DotContainer = styled.div`
  position: absolute;
  z-index: 0;
  display: flex;
  height: 100%;
  transition: 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;

const Dot = styled.div`
  transition: 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  flex: 1;
`;

const BigDot = styled(Dot)`
  transform: scale(1.2);
  flex: 1.2;
`;

// React component
const DotMap = (props) => {
  const { pictureArrayLength, currentIndex } = props;
  const dotArray = new Array(pictureArrayLength).fill(0);

  return (
    <MainContainer>
      <DotContainer style={{transform: `translateX(-${currentIndex * (100 / pictureArrayLength)}%)`}}>
        {
          dotArray.map((dot, index) => {
            if (index === currentIndex) {
              return (<BigDot>O</BigDot>)
            } else {
              return (<Dot>O</Dot>)
            }
          })
        }
      </DotContainer>
    </MainContainer>
  )
}

export default DotMap;