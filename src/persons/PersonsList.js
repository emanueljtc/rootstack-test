import React, { Component } from 'react';
import '../styles/PersonsList.css';
import PersonsData from '../data/persons.json'
import { Modal, Button, Form, Col } from 'react-bootstrap';
class PersonsList extends Component {
  constructor(props, context) {
    super(props, context);

    this.ModalShow = this.ModalShow.bind(this);
    this.ModalClose = this.ModalClose.bind(this);

    this.state = {
      show: false,
    };
  }

  ModalClose() {
    this.setState({ show: false });
  }

  ModalShow() {
    this.setState({ show: true });
  }
  render() {
    return (
      <div className="persons-list">
        <div className="header">
          <div className="texts">
            <h2 className="title">Leads</h2>
            <span className="data">Showing <strong className="number">20 <i className="fas fa-angle-down"></i></strong> out of 521 contacts</span>
          </div>
          <div className="search">
            <i className="fas fa-search"></i>
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
              <button className="btn-add" onClick={this.ModalShow}>
                <i className="fas fa-plus"></i>  
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
                    <img className="image-people" src={personsDetail.image} alt={personsDetail.id}/>
                    <div className="info">
                      <strong><p className="name">{personsDetail.name}</p></strong>
                      <a href="/" className="case">Case: {personsDetail.case}</a>
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
                    <div className="select">
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
                  <img className="image-people" src={personsDetail.image} alt={personsDetail.id}/>
                  <div className="info">
                    <strong><p className="name">{personsDetail.name}</p></strong>
                    <a href="/" className="case">Case: {personsDetail.case}</a>
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
                  <div className="select">
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
        
        <Modal show={this.state.show} onHide={this.ModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridFullName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Full Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter Phone" />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridSource">
                  <Form.Label>Source</Form.Label>
                  <Form.Control as="select">
                    <option>Choose...</option>
                    <option>Internet Search</option>
                    <option>Facebook</option>
                    <option>Refferal</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridStatus">
                  <Form.Label>Status</Form.Label>
                  <Form.Control as="select">
                    <option>Choose...</option>
                    <option>Lead</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCase">
                  <Form.Label>Case</Form.Label>
                  <Form.Control as="select">
                    <option>Choose...</option>
                    <option>Asault</option>
                    <option>Divorce</option>
                    <option>DUI</option>
                    <option>Fraud</option>
                    <option>Tax Evasion</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Form>;
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.ModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        </div>

    );
  }
}

export default PersonsList;
