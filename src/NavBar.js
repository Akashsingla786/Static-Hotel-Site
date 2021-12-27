import React from 'react'
import AboutUs from './AboutUs.js'
import {Navbar,Nav,NavLink} from 'react-bootstrap'


function NavBar() {
    return (
        <div>
            
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="nav">
      <Navbar.Brand>Hotel Bliss</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
     <NavLink href="/#">Home</NavLink>     
     <NavLink href="/AboutUs">About Us</NavLink>
      <NavLink href="/OurRooms">Our Rooms</NavLink>
      <NavLink href="/BookYourRoom">BookYourRoom</NavLink>
    <NavLink href="/ContactUs">Contact Us</NavLink>

       </Nav>
      </Navbar.Collapse>
    </Navbar>
        </div>
    )
}

export default NavBar
