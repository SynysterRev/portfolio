import { slide as Menu } from 'react-burger-menu';
import '../hamburger.css';

// import {Link} from 'react-router-dom';

export default function Hamburger() {

    return (
        <Menu right>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="projects" className="menu-item" href="/projects">Projects</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            {/* <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a> */}

        </Menu>
    );
}