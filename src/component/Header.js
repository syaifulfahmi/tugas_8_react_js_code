import React from 'react';
import {DropdownButton, Dropdown, Row, Col, Navbar, Breadcrumb} from 'react-bootstrap';



function Header() {
  return(
    <>
      <Row className="table-dark">
        <Col sm={3}>
          <DropdownButton id="dropdown-basic-button" title="Pilih Bahasa">
            <Dropdown.Item href="#/action-1">Bahasa</Dropdown.Item>
            <Dropdown.Item href="#/action-2">English</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col sm={6}>
        </Col>
        <Col sm={3}>
          <center>                  
              <Navbar.Brand>              
                <img alt="avatar" src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" width="30" /><br/>Syaiful Fahmi
              </Navbar.Brand>
          </center>       
        </Col>      
      </Row>
      <Row>
       <Col sm={4}>          
        </Col>
        <Col sm={4}>          
        </Col>
        <Col sm={4}>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://github.com/syaifulfahmi/tugas_8_react_js_code">Berita</Breadcrumb.Item>
            <Breadcrumb.Item active>Bola</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>    
    </>
    )
}
export default Header;