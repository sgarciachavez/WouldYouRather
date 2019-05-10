import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Logout from './Logout'
import Questions from './Questions'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'

class Menu extends Component{
  state = {
    tab: "home"
  }
  handleSelect = (key) =>{
    this.setState(() => ({
      tab: key
    }))
  }
  render(){
    return (
      <div>
        <Nav variant="tabs" defaultActiveKey="home"
          onSelect={this.handleSelect}>
          <Nav.Item>
            <Nav.Link eventKey="home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="add">New Question</Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link eventKey="board">Leader Board</Nav.Link>
          </Nav.Item>
          <Logout />
        </Nav>
        {this.state.tab === "add" ? <NewQuestion />
        : this.state.tab === "board" ? <LeaderBoard />
        : <Questions />}
      </div>
    )

  }
}

export default Menu
