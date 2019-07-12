import React, {Component} from 'react';
import './Banner.css';


class Banner extends Component {
    render() {
        return(
            <div className="banner">
            <img className="banner-pic" src="linkedinpic2.png" alt="linkedinPhoto"/>
            <div className="typed-text">
                <div className="typewriter first">Christian Cebrero</div>
                <div className="typewriter">Software Engineer</div>
            </div>
            </div>

        )
    }
}

export default Banner;