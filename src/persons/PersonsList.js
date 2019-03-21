import React, { Component } from 'react';
import '../styles/PersonsList.css';
import PeopleData from '../data/persons.json'

class PersonsList extends Component {
  render() {
    return (
      <div className="people-list">
        <h2>Lista de Personas</h2>
          <table className="list">
            <tr>
              <th>LEAD</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>SOURCE</th>
              <th>STATUS</th>
              <th>OPTIONS</th>
            </tr>
        {PeopleData.map((peopleDetail, index) =>{
          return (
                <tr>
                  <td>{peopleDetail.name}<br />{peopleDetail.case}</td>
                  <td>{peopleDetail.email}</td>
                  <td>{peopleDetail.phone}</td>
                  <td>{peopleDetail.source}</td>
                  <td>{peopleDetail.status}</td>
                  <td>...</td>
                </tr>
             
            )
        })}
        </table>
      </div>
    );
  }
}

export default PersonsList;
