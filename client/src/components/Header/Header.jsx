import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import './Header.scss';
import Userfront from "@userfront/react";
import { commerce } from '../../lib/commerce';

Userfront.init("wn9965n5");

const LogoutButton = Userfront.build({
  toolId: "naornr",
});



export default class Header extends Component {
  state={
    cart: null
  }

  

componentDidMount() {
}


componentDidUpdate(prevProps, prevState) {
  if(this.props.cart != prevProps.cart){
    console.log("rerender")
  }
}
render() {
let cartButtons = 
this.props.cart?.line_items.map((item) => {
  return (
  <NavDropdown.Item 
    key={item.id}
    href={`/item/${item.product_id}`}>
    <img 
      className="header__dd-image" 
      src={item.media.source} />
      {item.name}
  </NavDropdown.Item>)})
return (
  <div>
    <Navbar 
      className="header" 
      collapseOnSelect 
      expand="sm">
      <Navbar.Brand className="header__logo">Consignment Shop
      </Navbar.Brand>
      <Navbar.Toggle      
        aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div className="header__seperator">
          <Nav className="mr-auto">
            <Nav.Link 
              className="header__link" 
              href="/shops">Our Shops
            </Nav.Link>
            <Nav.Link 
              className="header__link" 
              href="/about">About Us
            </Nav.Link>
            <NavDropdown 
              className="header__link" 
              title="My Profile" id="collasible-nav-dropdown">
              <NavDropdown.Item >Edit Profile
              </NavDropdown.Item>
              <NavDropdown.Item >Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                <LogoutButton />
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown
            // onClick={}
              align="right"
              className="header__cart" 
              title="My Cart" id="collasible-nav-dropdown">
              {cartButtons}
              <NavDropdown.Divider />
              <NavDropdown.Item 
                href="/cart">✨Checkout✨
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  </div>
)
}
}
