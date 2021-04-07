import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import {
  Breeds,
  SubBreeds
} from './pages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Breeds} />
        <Route path='/subbreeds/:breed' component={SubBreeds} />
      </div>
    );
  }
}

export default App;
