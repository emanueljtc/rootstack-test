import React, { Component } from 'react';
import '../styles/PersonsList.css';
import PersonsData from '../data/persons.json'

class PersonsList extends Component {
  render() {
    return (
      <div className="persons-list">
        <div className="header">
          <div className="texts">
            <h2 className="title">Leads</h2>
            <span className="data">Showing <strong className="number">20 <i className="fas fa-angle-down"></i></strong> out of 521 contacts</span>
          </div>
          <div className="search">
            <i class="fas fa-search"></i>
            <input className="input-search" />
          </div>
          <div className="options-header">
            <div className="type">
              <span className="text">Type <i className="fas fa-angle-down"></i></span>
            </div>
            <div className="source">
              <span className="text">Source <i className="fas fa-angle-down"></i></span>
            </div>
            <div className="content-button">
              <button className="btn-add">
                <i class="fas fa-plus"></i>  
                Add Contact
              </button>
            </div>
          </div>
        </div>
          <div className="list">
            <span className="head lead-head"><strong>LEAD</strong></span>
            <span className="head"><strong>EMAIL</strong></span>
            <span className="head"><strong>PHONE</strong></span>
            <span className="head"><strong>SOURCE</strong></span>
            <span className="head"><strong></strong></span>
            {PersonsData.map((personsDetail, index) =>{
              return (
                <>
                  <span className="lead">
                    <img className="image-people" src={personsDetail.image} />
                    <div className="info">
                      <strong><p className="name">{personsDetail.name}</p></strong>
                      <a href="#" className="case">Case: {personsDetail.case}</a>
                    </div>
                  </span>
                  <span className="email"><strong>{personsDetail.email}</strong></span>
                  <span className="phone"><strong>{personsDetail.phone}</strong></span>
                  <span className="source">
                    <strong>
                      {personsDetail.source} 
                      <i className="fas fa-angle-down"></i>
                    </strong>
                  </span>
                  <span className="status">
                    <div class="select">
                      <div className="circle"></div>
                      <strong>{personsDetail.status}</strong>
                      <i className="fas fa-angle-down"></i>
                    </div>
                    <div className="options">
                      ...
                    </div>
                  </span>
                </>
                )
            })}
        </div>
        <div className="detail">
          {PersonsData.map((personsDetail, index) => {
            return (
              <div className="person">
                <span className="lead">
                  <img className="image-people" src={personsDetail.image} />
                  <div className="info">
                    <strong><p className="name">{personsDetail.name}</p></strong>
                    <a href="#" className="case">Case: {personsDetail.case}</a>
                  </div>
                </span>
                <span className="email"><strong>{personsDetail.email}</strong></span>
                <span className="phone"><strong>{personsDetail.phone}</strong></span>
                <span className="source">
                  <strong>
                    {personsDetail.source}
                    <i className="fas fa-angle-down"></i>
                  </strong>
                </span>
                <span className="status">
                  <div class="select">
                    <div className="circle"></div>
                    <strong>{personsDetail.status}</strong>
                    <i className="fas fa-angle-down"></i>
                  </div>
                  <div className="options">
                    ...
                    </div>
                </span>
              </div>
            )
          })}
        </div>
        </div>
    );
  }
}

export default PersonsList;
