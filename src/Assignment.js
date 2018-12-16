import React from 'react';

class Assignment extends React.Component {  
    render(){
        return(
            <div className="week-schedule">
                <h1>Week 3 - Databases</h1>

                <h2>Relational and Non-Relational Data and Database Systems</h2>

                <h3>About</h3>

                <p>This three-week program aims to introduce the fundamental concepts of data entities and data storage.</p>

                <h3>Key Objectives</h3>

                <p>By the end of this module, students should have a familiarity with and basic understanding of the following:
                    <ul>
                        <li>Entities</li>
                        <li>The relational model</li>
                        <li>The Structured Query Language (SQL)</li>
                        <li>The construction of a database system</li>
                        <li>MySQL as an example of a relational database system</li>
                        <li>Non-relational data and NoSQL</li>
                        <li>MongoDB as an example of a NoSQL database</li>
                    </ul>
                </p>

                <h2>Handing in homework</h2>
                <p>Take a look at <a href="https://www.youtube.com/watch?v=-o0yomUVVpU&index=2&list=PLVYDhqbgYpYUGxRdtQdYVE5Q8h3bt6SIA" >[this video]</a>made by Daan, he explains how your homework needs to be handed in.</p>
                <p>Also review the Git <a href="https://github.com/HackYourFuture/Git/blob/master/Lecture-3.md" >[workflow material]</a>from the JavaScript3 module, use this as a reference.</p>
            </div>
        );
    }
}

export default Assignment;