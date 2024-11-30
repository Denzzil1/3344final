import logo from './logo.svg';
import './App.css';
import {SearchBar} from './Components/Search Bar/SearchBar.js';

import {Routes} from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchBar/>}/>
      </Routes>
    </div>
  );
}

export default App;
