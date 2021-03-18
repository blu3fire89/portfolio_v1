import React from 'react'
import '../styles/PorfolioCard.css';
import Card from './Card';

function PorfolioCard() {
    return (
        <div className="porfolioCard">
            <h2>I'm the porfolio card</h2>
            <Card title="netflix-clone" 
            img="https://upload.wikimedia.org/wikipedia/en/f/f4/Netflix_-_English.jpg"
            description="this is wowzers" />

            <Card title="netflix-clone" 
            img="https://upload.wikimedia.org/wikipedia/en/f/f4/Netflix_-_English.jpg"
            description="this is wowzers" />
            <Card title="netflix-clone" 
            img="https://upload.wikimedia.org/wikipedia/en/f/f4/Netflix_-_English.jpg"
            description="this is wowzers" />
            <Card title="netflix-clone" 
            img="https://upload.wikimedia.org/wikipedia/en/f/f4/Netflix_-_English.jpg"
            description="this is wowzers" />
        </div>
    )
}

export default PorfolioCard
