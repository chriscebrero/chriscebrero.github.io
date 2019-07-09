import React, {Component} from 'react';
import './Project.css';
import PropTypes from 'prop-types';

class Project extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(PropTypes.string).isRequired,
        img: PropTypes.string.isRequired,
        source: PropTypes.string.isRequired
    }
    render() {
        const {name, description, img, source} = this.props;
        const skills = this.props.skills.map((skill, index) => (
            <p className="skills" key={index}>{skill}</p>
        ));
        return(
                    <div className="project-item">
                    <div className="project-content">
                        <div className="left">
                            <h3 className="name">{name}</h3>
                            <h4 className="description">{description}</h4>
                            <div>
                                {skills}
                            </div>
                            <a className="demo" href={source}>
                                Source
                            </a>
                        </div>
                    </div>
                        <div className="right">
                        <img className="image" src={img} alt={name}/>
                        </div>
                    </div>
        )
    }
}

export default Project