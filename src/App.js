import React, { Component } from 'react';
import './styles/App.css';
import PersonsList from './persons/PersonsList';
import Menu from './menu/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content-menu">
          <Menu/>
        </div>
        <div className="content-list">
          <PersonsList/>
        </div>
      </div>
    );
  }
}

export default App;
