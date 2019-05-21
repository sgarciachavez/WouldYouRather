import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Logout from './Logout'
import { Link } from 'react-router-dom'

class Tabs extends Component{
  
  render(){
    return (
      <div>
        <Nav variant="tabs" defaultActiveKey="/home" >
          <Nav.Item>
          <Link to={'/home'}>
            <Nav.Link eventKey="/home">Home</Nav.Link>
          </Link>
          </Nav.Item>
          <Link to={'/add'}>
          <Nav.Item>
            <Nav.Link eventKey="/add">New Question</Nav.Link>
          </Nav.Item>
          </Link>
          <Nav.Item>
              <Nav.Link eventKey="/board">Leader Board</Nav.Link>
          </Nav.Item>
          <Logout />
        </Nav>
      </div>
    )
  }
}

export default Tabs
