import React, {useState} from 'react';

const Counter = () => {
  const increaseSize = e => e.target.style.fontSize="3rem";
  const changeColor = e => e.target.style.color = '#ff0000'

  return(
    <button name="increase"></button>
  )

}
export default Counter
