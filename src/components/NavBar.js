import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';
import styled from "styled-components";
import { connect } from 'react-redux'
import { Button } from "react-bootstrap";


import Logout from "./Logout";

const Styles = styled.div`

.navbar {
    background-color: #222;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: #efefef;
    padding: 0.7rem;
    
  }

  &:hover {
    color: pink;
  }
}
`;


 const NavBar = ({currentUser, loggedIn }) => {

    return (
      <Styles>
        <Navbar expand="lg">
      <Navbar.Brand href="/"><strong>Zestie</strong></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/dishes">My Recipes</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/dishes/new">New Recipe</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>  
          { loggedIn ? <Logout/> : null }
          </Nav.Item>






      
        </Nav>
      </Navbar.Collapse>
    </Navbar>
</Styles>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
  }
  
  export default connect(mapStateToProps)(NavBar)