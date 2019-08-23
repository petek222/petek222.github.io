import React, {Component} from 'react';
import '../App.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Typist from 'react-typist';
import ReactDOM from 'react-dom';

export default class Tools extends React.Component {

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
          ReactDOM.render(this.workList(), document.getElementById('toollist'));

      }

      else {
          ReactDOM.unmountComponentAtNode(document.getElementById('toollist'));
      }

      this.setState({isToggleOn: !this.state.isToggleOn});
  }

  // Alter this list to display desired stuff
  // Maybe Make this non-vertical???
  workList() {
      return (
        <ul>
        <Nav vertical className = "workNav">
        <code className = 'prof'>Listed by order of proficiency.</code>
        <br></br>
          <NavItem className = "nodeElem">
            <li><code> Node.js</code></li>
          </NavItem>
          <br></br>
          <NavItem className = "cElem">
              <code>C++</code>
          </NavItem>
          <br></br>
          <NavItem className = "reactElem">
              <code>React.js</code>
          </NavItem>
          <br></br>
          <NavItem className = "javascriptElem">
              <code>Javascript</code>
          </NavItem>
          <br></br>
          <NavItem className = "javaElem">
              <code>Java</code>
          </NavItem>
          <br></br>
          <NavItem className = "htmlElem">
              <code>HTML/CSS</code>
          </NavItem>
          <br></br>
          <NavItem className = "sqlElem">
              <code>SQL</code>
          </NavItem>
          <br></br>
          <NavItem className = "matlabElem">
              <code>Matlab</code>
          </NavItem>
          <br></br>
          <NavItem className = "pythonElem">
              <code>Python</code>
          </NavItem>
          <br></br>
        </Nav>
        </ul>
      );
  }



  render() {
      return (
          <Nav vertical className = "nav">
          <NavItem onClick = {this.handleClick} className = "listElem">
              <Typist>
                <code>🔧 Tools.</code>
              </Typist>
          </NavItem>
        </Nav>
      );
  }
}



