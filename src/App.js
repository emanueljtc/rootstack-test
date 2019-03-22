import React, { Component } from 'react';
import './styles/App.css';
import PersonsList from './persons/PersonsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content-menu">
          <div className="Menu">
              Home
          </div>
        </div>
        <div className="content-list">
          <PersonsList/>
        </div>
      </div>
    );
  }
}

export default App;
