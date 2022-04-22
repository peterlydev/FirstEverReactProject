import React, { useState, useEffect } from 'react'

function Timer() {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const count = () => setTimer(t => t + 1)
    const int = setInterval(count, 5000)
    console.log(int)
    function bgColor(int){
      const bg = document.getElementById('root')
      if (int % 2 === 0) {
        bg.style.backgroundColor = 'Blue'
      } else {
        bg.style.backgroundColor = 'Yellow'
      }
    }
    return() => bgColor(int)   
  }, [timer])

  return (
    <div>
    </div>
  )
}

export default Timer
