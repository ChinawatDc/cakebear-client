import React from 'react'
import {Navbar ,Nav ,NavDropdown } from 'react-bootstrap'
import Stylecss from '../assets/styles/navbar.module.scss'

function navbar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{background:"#FFE4E1"}}>
  <Navbar.Brand style={{fontFamily : "Sriracha, cursive",color:"#707070"}}>CAKEBEAR</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link style={{fontFamily : "Sriracha, cursive",color:"#707070"}}>HOME</Nav.Link>
      <NavDropdown style={{fontFamily : "Sriracha, cursive",color:"#707070"}}  title="MENU" id="collasible-nav-dropdown">
        <NavDropdown.Item style={{fontFamily : "Sriracha, cursive",color:"#707070"}}>Cake</NavDropdown.Item>
        <NavDropdown.Item style={{fontFamily : "Sriracha, cursive",color:"#707070"}}>CupCake</NavDropdown.Item>
        <NavDropdown.Item style={{fontFamily : "Sriracha, cursive",color:"#707070"}}>CheeseCake</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link style={{fontFamily : "Sriracha, cursive",color:"#707070"}}>CONTACT</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default navbar
