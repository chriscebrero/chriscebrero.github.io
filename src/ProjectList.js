import React, {Component} from 'react';
import Project from './Project';
import './ProjectList.css';
import PropTypes from 'prop-types';

class ProjectList extends Component {
    static defaultProps = {
        projects: [
            {
                name: "Warbler",
                description: "A message board application that is catered towards groups of friends that want to leave messages, organize events, upload pictures, and more.",
                skills: ["HTML5", "CSS3", "React", "Redux", "MongoDB", "JWT Web Token", "REST API"],
                img: "WARBLER.png",
                source: "https://github.com/chriscebrero/WarblerApp"
            }, 
            {
                name: "Yelp Camp",
                description: "An application that operates the same as Yelp in which users can upload, set the cost, review, rate and comment on campgrounds.",
                skills: ["HTML5", "CSS3", "JavaScript", "Node.js", "MongoDB", "Express.js"],
                img: "YELPCAMP.png",
                source: "https://github.com/chriscebrero/YelpCamp"
            },
            {
                name: "Guess The Colour?",
                description: "A simple game application in which a user has to guess the right colour amongst six shapes based on a given RGB code",
                skills: ["HTML5", "CSS3", "JavaScript"],
                img: "GuessTheColour.png",
                source: "https://github.com/chriscebrero/Web-Dev/tree/master/Colour%20Project"
            },
            {
                name: "Cook It!",
                description: "A utility application built towards uploading new recipes onto a display so the user will be able to choose what to eat and how to prepare in the future",
                skills: ["HTML5", "CSS3", "React", "Node.js"],
                img: "cookit.png",
                source: "https://github.com/chriscebrero/Web-Dev/tree/master/Colour%20Project"
            }
            ]
    }

    static propTypes = {
        projects: PropTypes.arrayOf(PropTypes.object)
    }
    render() {
        const project = this.props.projects.map((proj, index) => (
            <Project key={index} {...proj}/>
        ))

        return(
            <div id="projects" className="project">
                <h1>Projects</h1>
            <div className="project-list">
            {project}
            </div>
            </div>
        )
    }
}

export default ProjectList