import React, { Component } from 'react';
// import './App.css';
import PeopleData from '../data/persons.json'

class PersonsList extends Component {
  render() {
    return (
      <div className="List">
        <h2>Lista de Personas</h2>
        {PeopleData.map((peopleDetail, index) =>{
          return (
            <div>
              <table className="PeopleList">
                <tr>
                  <th>LEAD</th>
                  <th>EMAIL</th>
                  <th>PHONE</th>
                  <th>SOURCE</th>
                  <th>STATUS</th>
                  <th>OPTIONS</th>
                </tr>
                <tr>
                  <td>{peopleDetail.name}<br />{peopleDetail.case}</td>
                  <td>{peopleDetail.email}</td>
                  <td>{peopleDetail.phone}</td>
                  <td>{peopleDetail.source}</td>
                  <td>{peopleDetail.status}</td>
                  <td>...</td>
                </tr>
              </table>
            </div>
            )
        })}
      </div>
    );
  }
}

export default PersonsList;
