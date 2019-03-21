import React, { Component } from 'react';
import './styles/App.css';
import PersonsList from './persons/PersonsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PersonsList />
      </div>
    );
  }
}

export default App;
