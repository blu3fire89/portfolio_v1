import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import PorfolioCard from './PorfolioCard';
import Contact from './Contact';
import Footer from './Footer';
import '../styles/Main.css';


function Main() {
    return (
        <div className="main">
            <Navbar />
            <Header />
            <PorfolioCard />
            <Contact />
            <Footer />
        </div>
    )
}

export default Main
