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
        <div className="content-main">
          <div className="bar-header">
            <section className="icon-search">
              <i className="fas fa-search"></i>
            </section>
            <section className="icon-center">
              <i className="fab fa-docker"></i>
            </section>
            <section className="info">
              <i className="fas fa-envelope-open-text"></i>
              <span className="text">
                <strong>Hello, Shaun Clark</strong>
                <i className="fas fa-angle-down"></i>
              </span>
            </section>
          </div>
          <div className="content-list">
            <PersonsList/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
