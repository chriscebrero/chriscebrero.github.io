import React, {Component} from 'react';
import './Social.css';

class Social extends Component {
    render() {
        return(

            <div className="social-media-icons">
                <div className="link-item">
                    <a href="https://www.linkedin.com/in/ccebrero/" target="_blank">
                        <img src="linkedin-brands.svg" alt="linkedinpics"/>
                    </a>
                </div>
                <div className="link-item">
                    <a href="https://github.com/chriscebrero" target="_blank">
                        <img src="github-square-brands.svg" alt="githubpics"/>
                    </a>
                </div>
                <div className="link-item">
                    <a href="https://www.linkedin.com/in/ccebrero/" target="_blank">
                        <img src="copy-solid.svg" alt="copypics"/>
                    </a>
                </div>
            </div>

        )
    }
}

export default Social;