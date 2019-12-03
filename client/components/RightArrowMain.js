import React from 'react';

const RightArrowMain = ({onClick}) => (
  <div onClick={ () => { onClick() } }>
    <svg role="img" aria-label="Next" focusable="false"><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"></path></svg>
  </div> 
)

export default RightArrowMain;