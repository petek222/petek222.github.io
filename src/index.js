import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Bio from './bio';
import Work from './tabs/work';
import Projects from './tabs/projects';
import Interests from './tabs/interests';
import Contact from './tabs/contact';
import School from './tabs/school';
import Tools from './tabs/tools';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Bio/>, document.getElementById('bio'));
ReactDOM.render(<Work/>, document.getElementById('work'));
ReactDOM.render(<Projects />, document.getElementById('projects'));
ReactDOM.render(<Tools />, document.getElementById('tools'));
ReactDOM.render(<School />, document.getElementById('school'));
ReactDOM.render(<Interests />, document.getElementById('interests'));
ReactDOM.render(<Contact />, document.getElementById('contact'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
