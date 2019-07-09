import React, {Component} from 'react';
import Experience from './Experience';
import './ExperienceList.css';
import PropTypes from 'prop-types';

class ExperienceList extends Component {
    static defaultProps = {
        experience: [
            {
                company: "SAP",
                position: "Software Developer Intern",
                duration: "October 2018 to August 2019",
                img: "sap-logo.png",
                description: ["Implemented key features that increased the efficiency of SAP's new Help Portal", "Polished SAP's Hybris-themed websites by running and fixing code on different platforms and browsers", "Achieved many stakeholder objectives by establishing a more customized version of the SAP DITA Open Toolkit", "Ensured stability and reliability of SAP's User Assistance Content Platform by writing JavaScript scripts to automate UI tests"]
            }, 
            {
                company: "Mount Pleasant Business Improvement Area",
                position: "Marketing Coordinator Intern",
                duration: "January 2017 to April 2017",
                img: "mountpleasantbia.png",
                description: ["Inputted new information regarding new property listings onto a spreadsheet which was later used to showcase statistics", "Surveyed business owners to create beneficial solutions to their dilemmas regarding the area", "Drafted solutions to improve businesses & Mount Pleasant as a community"]
            }
        ]
    }

    static propTypes = {
        experience: PropTypes.arrayOf(PropTypes.object)
    }
    render() {
        const experience = this.props.experience.map((exp, index) => (
            <Experience key={index} {...exp}/>
        ))

        return(
            <div id="experience" className="experience">
                <h1>Experience</h1>
            <div className="experience-list">
            {experience}
            </div>
            </div>
        )
    }
}

export default ExperienceList