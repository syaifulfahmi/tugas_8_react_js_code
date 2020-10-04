import React, {Component} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';

class PageLogin extends Component{
  constructor(props){
    super(props)
    this.state={
      show: false

    }

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);

  }

  handleClose(e){
    this.setState({
      show: false
    })
  }

  handleShow(){
    this.setState({
      show:true
    })
  }

  render(){
    return(
      <div>
        <Form>
          <center>
            <img alt="login" src="https://www.flaticon.com/svg/static/icons/svg/1000/1000946.svg" width="30px" height="30px" rounded />
            <h4>Silahkan Login</h4>
          </center>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Masukan email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Term & Condition" />
          </Form.Group>
          <Button variant="primary" onClick={this.handleShow}>Login</Button>
        </Form>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>Anda Berhasil Login</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
            <Button variant="primary" onClick={this.handleClose}>Save Username & Password</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }

}

export default PageLogin;