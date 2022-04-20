import './App.css';
import React, { useState } from 'react'
import FavouriteMusic from './components/FavouriteMusic'
import ArtistSongs from './components/ArtistSongs';
// import Counter from './components/Counter';


function App() {
  // const title = 'React Exercise 1';
  // const person = {name: 'Peter', age: 31};

  const [date, setDate] = useState()

  setInterval(() => {
    const current = new Date();
    const dateTime = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
    setDate(dateTime)
  },1000)
  // const current = new Date();
  // const dateTime = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}`;

  return (
    <div className="App">  {/* cannot use class as HTML will convert it to class itself so must use className */}
      <div className="content">
      <h1>Current date / time is {date}</h1>
        <FavouriteMusic 
        // artists='J Cole' genre="Hip-Hop" description="Jermaine Lamarr Cole is an American rapper, singer, songwriter, and record producer. Cole is regarded as one of the most influential rappers of his generation."
         />
        <ArtistSongs />
        <div className="App">
    </div>
        {/* <Counter /> */}
      </div>
    </div>
  );
}

export default App
