import React, { Component } from 'react';
import '../styles/Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div className="sidebar-menu">
          <ul className="ul-content">
            <li className="header-menu">
              <i className="fas fa-align-right"></i>
            </li>
            <li className="sidebar-dropdown">
              <a href="/">
                <i className="fas fa-home"></i>
                <span>Home</span>
              </a>
            </li>
            <li className="sidebar-dropdown">
              <a href="/">
                <i className="far fa-user-circle"></i>
                <span>Leads</span>
              </a>
            </li>
            <li className="sidebar-dropdown">
              <a href="/">
                <i className="far fa-check-square"></i>
                <span>Tasks</span>
              </a>
            </li>
            <li className="sidebar-dropdown">
              <a href="/">
                <i className="far fa-clone"></i>
                <span>Forms</span>
              </a>
            </li>
            <li className="sidebar-dropdown">
              <a href="/">
                <i className="fas fa-user-plus"></i>
                <span>Refferals</span>
              </a>
            </li>
            <li className="sidebar-dropdown">
              <a href="/">
                <i className="fas fa-tasks"></i>
                <span>Checklists</span>
              </a>
            </li>
            <li className="sidebar-dropdown">
              <a href="/">
                <i className="far fa-calendar-alt"></i>
                <span>Calendar</span>
              </a>
            </li>
            <li className="sidebar-dropdown">
              <a href="/">
                <i className="fas fa-cog"></i>
                <span>Settings</span>
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
