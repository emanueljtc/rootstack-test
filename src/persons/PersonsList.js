import React, { Component } from 'react';
import '../styles/PersonsList.css';
import PeopleData from '../data/persons.json'

class PersonsList extends Component {
  render() {
    return (
      <div className="people-list">
          <div className="list">
            <span className="head lead-head"><strong>LEAD</strong></span>
            <span className="head"><strong>EMAIL</strong></span>
            <span className="head"><strong>PHONE</strong></span>
            <span className="head"><strong>SOURCE</strong></span>
            <span className="head"><strong></strong></span>
            <span className="head"><strong></strong></span>
            {PeopleData.map((peopleDetail, index) =>{
              return (
                <>
                  <span className="lead">
                    <img className="image-people" src={peopleDetail.img} />
                    <div class="info">
                      <strong><p className="name">{peopleDetail.name}</p></strong>
                      <a href="#" className="case">Case: {peopleDetail.case}</a>
                    </div>
                  </span>
                  <span><strong>{peopleDetail.email}</strong></span>
                  <span><strong>{peopleDetail.phone}</strong></span>
                  <span><strong>{peopleDetail.source}</strong></span>
                  <span><strong>{peopleDetail.status}</strong></span>
                  <span>...</span>
                </>
                )
            })}
        </div>
      </div>
    );
  }
}

export default PersonsList;
