import React, {Component} from 'react';
import './Skills.css';

class Skills extends Component {
    render() {
        return(
            <div id="skills" className="skills">
            <h1>
                Skills
            </h1>

            <div className="skill-cards">

                <div className="front-end skill-card">
                    <img className="frontend-pic" src="laptop-code-solid.svg" alt="frontend"/>
                    <h2 className="type-of-skill">Front End</h2>
                    <div className="each-skill">
                    <p>HTML5</p>
					<p>CSS3</p>
					<p>JavaScript</p>
                    <p>TypeScript</p>
					<p>ReactJS</p>
					<p>AngularJS</p>
                    </div>
                </div>

                <div className="back-end skill-card">
                    <img className="backend-pic" src="code-branch-solid.svg" alt="backend" />
                    <h2 className="type-of-skill">Back End</h2>
                    <div className="each-skill">
                    <p>Java</p>
					<p>Node.js</p>
                    <p>Swift</p>
					<p>Express.js</p>
					<p>MongoDB</p>
					<p>C/C++</p>
					<p>Python</p>
                    </div>
                </div>

                <div className="tools skill-card">
                    <img className="tools-pic" src="tools-solid.svg" alt="tools"/>
                    <h2 className="type-of-skill">Tools</h2>
                    <div className="each-skill">
                    <p>Git</p>
					<p>Perforce</p>
					<p>Atom</p>
					<p>AWS</p>
					<p>JIRA</p>
					<p>Jenkins</p>
					<p>Protractor</p>
					<p>Jasmine</p>
                    </div>
                </div>

            </div>

            </div>
        )
    }
}

export default Skills;