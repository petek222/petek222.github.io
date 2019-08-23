import React, {Component} from 'react';
import Typist from 'react-typist';
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App-header">
        <BrowserRouter basename="http://petek222.github.io/peter_koncelik" />
        <Typist className="myName">
          <code>Peter Koncelik.</code>
        </Typist>
      </div>
  );
}
export default App;
