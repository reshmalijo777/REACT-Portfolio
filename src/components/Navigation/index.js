import React from 'react';
// Import Link component for all internal application hyperlinks
import { Link } from 'react-router-dom';

function Navbar() {
    const navLinks = [
        {
            name: 'About Me',
            link: '/about',
        },
        {
            name: 'Portfolio',
            link: '/portfolio',
        },
        {
            name: 'Contact Me',
            link: '/contact',
        },
        {
            name: 'Resume',
            link: '/resume'
        }
    ];
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">   
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        {navLinks.map((item, index) => (
                            <li key={`${item.name}-${index}`} className="nav-item">
                                {/* Use <Link> component to create an internal hyperlink reference. Use `to` prop to set the path instead of `href` */}
                                <Link className='nav-link nav-btn' 
                                to={item.link}>{item.name}
                                </Link >
                            </li>))}
                        </ul>
                    </div>
            </div>
        </nav>
    )
}

export default Navbar;