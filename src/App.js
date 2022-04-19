import './App.css';
import FavouriteMusic from './components/FavouriteMusic'
import ArtistSongs from './components/ArtistSongs';

function App() {
  // const title = 'React Exercise 1';
  // const person = {name: 'Peter', age: 31};

  return (
    <div className="App">  {/* cannot use class as HTML will convert it to class itself so must use className */}
      <div className="content">
        <FavouriteMusic />
        <ArtistSongs />
      </div>
    </div>
  );
}

export default App
