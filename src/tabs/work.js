import React, {Component} from 'react';
import '../App.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Typist from 'react-typist';
import ReactDOM from 'react-dom';


export default class Work extends React.Component {

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
            ReactDOM.render(this.workList(), document.getElementById('worklist'));

        }

        else {
            ReactDOM.unmountComponentAtNode(document.getElementById('worklist'));
        }

        this.setState({isToggleOn: !this.state.isToggleOn});
    }

    // Alter this list to display desired stuff
    workList() {
        return (
          <Nav vertical className = "workNav">
            <NavItem className = "listElem ">
              <NavLink href="https://github.com/petek222/MTD_Products_Order_Tracker" target = "_blank" className = "listElem"><code>📑 Built an application to track MTD orders throughout the entire order process, from placement to shipment.</code></NavLink>
            </NavItem>
            <br></br>
            <NavItem>
              <NavLink href="https://github.com/petek222/MTD_Products_Order_Tracker_UI" target = "_blank" className = "listElem"><code>✨ React.js UI for order tracking application for straightforward use across the entire MTD company.</code></NavLink>
            </NavItem>
            <br></br>
            <NavItem>
              <NavLink className = "listElemStatic"><code>🚨 Enhanced preexisting MTD codebase with mailing, error-handling, and catalog-synchronization functionality. </code></NavLink>
            </NavItem>
            <br></br>
            <NavItem>
              <NavLink className = "listElemStatic"><code>👨‍🏫 I currently TA Calculus and Linear Algebra at Vanderbilt University.</code></NavLink>
            </NavItem>
          </Nav>
        );
    }



    render() {
        return (
            <Nav vertical className = "nav">
            <NavItem onClick = {this.handleClick} className = "listElem">
                <Typist>
                    <code>💼 Work.</code>
                </Typist>
            </NavItem>
          </Nav>
        );
    }
}
