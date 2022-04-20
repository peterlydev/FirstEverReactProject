import './App.css';
import FavouriteMusic from './components/FavouriteMusic'
import ArtistSongs from './components/ArtistSongs';
// import Counter from './components/Counter';


function App() {
  // const title = 'React Exercise 1';
  // const person = {name: 'Peter', age: 31};

  return (
    <div className="App">  {/* cannot use class as HTML will convert it to class itself so must use className */}
      <div className="content">
        <FavouriteMusic artists='J Cole' genre="Hip-Hop" description="Jermaine Lamarr Cole is an American rapper, singer, songwriter, and record producer. Cole is regarded as one of the most influential rappers of his generation." />
        <ArtistSongs />
        {/* <Counter /> */}
      </div>
    </div>
  );
}

export default App
