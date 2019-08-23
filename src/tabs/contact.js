import React, {Component} from 'react';
import '../App.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Typist from 'react-typist';
import ReactDOM from 'react-dom';

export default class Contact extends React.Component {

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
          ReactDOM.render(this.workList(), document.getElementById('contactlist'));

      }

      else {
          ReactDOM.unmountComponentAtNode(document.getElementById('contactlist'));
      }

      this.setState({isToggleOn: !this.state.isToggleOn});
  }

  // Alter this list to display desired stuff
  workList() {
      return (
        <Nav vertical className = "workNav">
          <NavItem className = "listElem ">
            <NavLink href="mailto:peter.e.koncelik@vanderbilt.edu" className = "listElem"><code>📥 Email (the best way to reach me).</code></NavLink>
          </NavItem>
          <br></br>
          <NavItem>
            <NavLink className = "listElemStatic"><code> 📱 Phone: 440-409-4313.</code></NavLink>
          </NavItem>
          <br></br>
          <NavItem>
            <NavLink href="https://www.dropbox.com/home?preview=Resume+(3).pdf" target = "_blank" className = "listElem"><code>📄 Resume.</code></NavLink>
          </NavItem>
          <br></br>
          <NavItem>
            <NavLink href="https://github.com/petek222" target = "_blank" className = "listElem"><code>💻 Github.</code></NavLink>
          </NavItem>
          <br></br>
          <NavItem>
            <NavLink href="https://www.linkedin.com/in/peter-koncelik-120734157/" target = "_blank" className = "listElem"><code>🤝 Linkedin.</code></NavLink>
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
                <code>📞 Contact.</code>
              </Typist>
          </NavItem>
        </Nav>
      );
  }
}

