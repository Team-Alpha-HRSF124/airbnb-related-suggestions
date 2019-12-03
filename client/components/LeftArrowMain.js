import React from 'react';

const LeftArrowMain = ({onClick}) => (
  <div onClick={ () => { onClick() } }>
    <svg role="img" aria-label="Previous" focusable="false"><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd"></path></svg>
  </div> 
)

export default LeftArrowMain;