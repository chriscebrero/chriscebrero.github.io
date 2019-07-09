import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return(
            <header>
                <nav>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contacts">Contact</a></li>
                </nav>
            </header>
        )
    }
}

export default Navbar;