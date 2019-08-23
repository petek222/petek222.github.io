import React, {Component} from 'react';
import '../App.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Typist from 'react-typist';
import ReactDOM from 'react-dom';


export default class Interests extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
          isToggleOn: false
      };

      this.handleClick = this.handleClick.bind(this);
  }

  // On this click we will want to render a full Navbar with desired links 
  handleClick() {

      // Add Stuff to DOM
      if (!this.state.isToggleOn) {
          ReactDOM.render(this.workList(), document.getElementById('interestlist'));

      }

      else {
          ReactDOM.unmountComponentAtNode(document.getElementById('interestlist'));
      }

      this.setState({isToggleOn: !this.state.isToggleOn});
  }

  // Alter this list to display desired stuff
  workList() {
      return (
        <Nav vertical className = "workNav">
          <code className = "prof">Below are some of my hobbies and the things I like to do for fun.</code>
          <br></br>
          <NavItem>
            <NavLink className = "static"><code>🎲 Hobby <a href = "https://boardgamegeek.com/" className = "linkElem">Boardgames</a>. European strategy boardgames are my preference, but I'll try almost any game once.</code></NavLink>
          </NavItem>
          <br></br>
          <NavItem>
            <NavLink className = "static"><code>🎵 Music. Preferrably <a className = "linkElem" href ="https://www.youtube.com/watch?v=Rb0UmrCXxVA">Classical and Mozart</a> or <a className = "linkElem" href = "https://www.youtube.com/playlist?list=PLE774335E942D5938">Kanye West.</a></code></NavLink>
          </NavItem>
          <br></br>
          <NavItem>
            <NavLink className = "static"><code>🍔 Trying new Restaurants and Coffee Places wherever I am.</code></NavLink>
          </NavItem>
          <br></br>
          <NavItem>
            <NavLink className = "static"><code>🏀 Playing pickup basketball when I can.</code></NavLink>
          </NavItem>
          <br></br>
        </Nav>
      );
  }



  render() {
      return (
          <Nav vertical className = "nav">
          <NavItem onClick = {this.handleClick} className = "listElem">
              <Typist>
                <code>👌 Interests.</code>
              </Typist>
          </NavItem>
        </Nav>
      );
  }
}

