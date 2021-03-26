import React from 'react'
import '../styles/Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header-text">
                <h2>
                    <span>A Simple Guy</span>
                    <span>That does Web Design</span>    
                    <span>As a <span className="headerText-hobby">Hobby</span></span>
                </h2>  

            </div>
            
        </div>
    )
}

export default Header
