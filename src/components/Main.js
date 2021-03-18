import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import PorfolioCard from './PorfolioCard';
import '../styles/Main.css';


function Main() {
    return (
        <div className="main">
            <Navbar />
            <Header />
            <PorfolioCard />
            {/* Contact */}
                
        </div>
    )
}

export default Main
