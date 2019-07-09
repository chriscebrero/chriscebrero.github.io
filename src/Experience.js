import React, {Component} from 'react';
import './Experience.css';
import PropTypes from 'prop-types';

class Experience extends Component {
    static propTypes = {
        company: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        description: PropTypes.arrayOf(PropTypes.string).isRequired
    }
    render() {
        const {company, position, duration, img} = this.props;
        const description = this.props.description.map((desc, index) => (
            <li className="description" key={index}>{desc}</li>
        ));
        return(
                    <div className="experience-item">
                    <div className="exp-content">
                        <div className="left">
                            <h3 className="company-name">{company}</h3>
                            <h4 className="job-position">{position}</h4>
                            <h4 className="duration">{duration}</h4>
                            <ul>
                                {description}
                            </ul>
                        </div>
                    </div>
                        <div className="right">
                        <img className="compimg" src={img} alt={company}/>
                        </div>
                    </div>
        )
    }
}

export default Experience;