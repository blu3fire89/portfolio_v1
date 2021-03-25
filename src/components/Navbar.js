import React from 'react'
import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-text">
                <h2>BRIAN</h2>
                <div className="navbar-links">
                    <h2><a href="#portfolio">Portfolio</a></h2>
                    <h2><a href="#contact">Contact</a></h2>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Navbar
