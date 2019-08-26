import React, {Component} from 'react';
import './App.css';
import Typist from 'react-typist';

export default class PageInfo extends React.Component {

    render() {
        return (
        <Typist>
        <div>
            <code className = "bio">This website was built with React.js, HTML5, and CSS</code> 
        </div>
        </Typist>
        );
    }
}