import React, {Component} from 'react';
import '../App.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Typist from 'react-typist';
import ReactDOM from 'react-dom';

export default class School extends React.Component {

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
          ReactDOM.render(this.workList(), document.getElementById('schoollist'));

      }

      else {
          ReactDOM.unmountComponentAtNode(document.getElementById('schoollist'));
      }

      this.setState({isToggleOn: !this.state.isToggleOn});
  }

  // Alter this list to display desired stuff
  workList() {
      return (
        <Nav vertical className = "workNav">
          <code className = 'prof'>Relevant Coursework by Major</code>
          <br></br>
          <code className = "prof"><a className = "headerElem">Computer Science: </a>Java Programming, Discrete Structures, Digital Logic, Program Design and Data Structres, Intermediate Software Design, Computer Organization</code>
          <br></br>
          <code className = "prof"><a className = "headerElem">Applied Mathematics: </a>Multivariable Calculus, Linear Algebra, Differential Equations, Introuction to Numerical Mathematics, Statistics and Probability for Engineers.</code>
          <br></br>
          <code className = "prof"><a className = "headerElem">Classics: </a>(Latin): Prosaic Ancient Latin, Roman Satire, the Aeneid (History): Roman Civilization, Alexander the Great, Classical Literature</code>
          <br></br>
          <br></br>

        <code className = 'prof'>Below are a few select assignments of interest. Comuter Science coursework is omitted due to honor code.</code>
        <br></br>
          <NavItem>
            <NavLink className = "static"><code>📐 Math. This <a className = "linkElem" href = "https://www.dropbox.com/home?preview=MATH+3620%3A+Computer+Homework+06.pdf" target = "_blank">assignment</a> concerning the effectiveness of trigonometiric and spline data interpolant functions</code></NavLink>
          </NavItem>
          <br></br>
          <NavItem>
            <NavLink className = "static"><code>📐 Math. This section <a className = "linkElem" href = "http://www.nada.kth.se/~annak/diracdelta.pdf" target = "_blank">Dirac-Delta Function</a> from my Differential Equations course.</code></NavLink>
          </NavItem>
          <br></br>
          <NavItem>
            <NavLink className = "static"><code>🏛️ Classics. See essays about <a className = "linkElem" href = "https://www.dropbox.com/home?preview=Summus+Potens+Caesari.pdf" target = "_blank">Caesar's rise to power</a> and the famous <a className = "linkElem" href = "https://www.dropbox.com/home?preview=Ara+Pacis+Augustae.pdf" target = "_blank">'Ara Pacis Augustae'</a></code></NavLink>
          </NavItem>
          <br></br>
          <NavItem>
            <NavLink className = "static"><code>📜 Classics. Also see this ancient <a className = "linkElem" href = "https://www.dropbox.com/home?preview=Mea+Satura.pdf" target = "_blank">Latin Satire</a> I composed in the style of Juvenal.</code></NavLink>
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
                <code>📙 Academics.</code>
              </Typist>
          </NavItem>
        </Nav>
      );
  }
}



