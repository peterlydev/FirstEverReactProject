import Home from './components/Home';
import About from './components/About';
import Clock from './components/Clock';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import FavouriteMusic from './components/FavouriteMusic'
import ArtistSongs from './components/ArtistSongs';
// import Lyrics from './components/Lyrics';
// import Timer from './components/Timer';
//   
// import Counter from './components/Counter';

// import { FavouriteMusic, ArtistSongs, Lyrics, Color} from './components'


function App() {
  return (
    <Router>
    <div className="App">  {/* cannot use class as HTML will convert it to class itself so must use className */}
      <Header />
      <div className="content">
      <Switch>
        <Route exact path="/">
          <Clock/>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/music">
        <ArtistSongs/>
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App
