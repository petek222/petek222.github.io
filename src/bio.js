import React, {Component} from 'react';
import './App.css';

export default class Bio extends React.Component {

    render() {
        return (
        <div>
            <code className = "bio">Hi! My name is Peter Koncelik, and I am currently a Junior at Vanderbilt University
                studying Computer Science, Applied Mathematics, and Classics. I most recently worked as a Full-Stack Software
                Developer Intern at MTD Products in Cleveland, OH.
            </code> 
            <code className = "bio">    
                I have experience in full-stack development and am currently seeking an internship for the
                Summer of 2020 in Software Engineering / Development. Look below to see some of my work, interests, 
                projects, and contact information. 
            </code>
        </div>
        );
    }
}