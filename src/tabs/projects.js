import React, {Component} from 'react';
import '../App.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Typist from 'react-typist';
import ReactDOM from 'react-dom';


export default class Projects extends React.Component {

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
          ReactDOM.render(this.workList(), document.getElementById('projectlist'));

      }

      else {
          ReactDOM.unmountComponentAtNode(document.getElementById('projectlist'));
      }

      this.setState({isToggleOn: !this.state.isToggleOn});
  }

  // Alter this list to display desired stuff
  workList() {
      return (
        <Nav vertical className = "workNav">
            <NavItem>
              <NavLink href="https://www.npmjs.com/package/trimap_config_loader" target = "_blank" className = "listElem"><code>💨 Developed an npm module for secure, efficient, and speedy configuration loading.</code></NavLink>
            </NavItem>
          <br></br>
          <NavItem>
            <NavLink href="https://github.com/petek222/LatinScansion" target = "_blank" className = "listElem"><code>📝 Applicaton to scan the meter of ancient Latin poetry for use in High School/College Latin Courses.</code></NavLink>
          </NavItem>
          <br></br>
          <NavItem>
            {/* Fix this file download */}
            <NavLink href="https://www.dropbox.com/home?preview=Figaro.wav" download target = "_blank" className = "listElem"><code> 🎼 Guitar-String simulation (course), extended to play the opening measures of Mozart's Marriage of Figaro.</code></NavLink>
          </NavItem>
          <br></br>
          <NavItem>
            <NavLink className = "listElemStatic"><code>🙋‍♂️ This Website :).</code></NavLink>
          </NavItem>
          <br></br>
          <NavItem>
            <NavLink className = "listElemStatic"><code>❓ More to come...</code></NavLink>
          </NavItem>
        </Nav>
      );
  }


  render() {
      return (
          <Nav vertical className = "nav">
          <NavItem onClick = {this.handleClick} className = "listElem">
              <Typist>
                <code>🚧 Projects.</code>
              </Typist>
          </NavItem>
        </Nav>
      );
  }
}