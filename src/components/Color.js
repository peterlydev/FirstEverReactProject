import {useEffect} from 'react';

function Background() {
    useEffect(() => {
      setInterval(() => {
        const color = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = `#${color}`;
        console.log(color);
      }, 2000);
    });
    return;
  }

  export default Background;
