import React from 'react';
import '../styles/Card.css';

function Card({title, img, description, link}) {
    return (
        <div className="card">
            <a href={link} target="_blank" rel="noreferrer"> 
                <img className="cardImage" src={img} alt={title}/>
                <div className="card-text">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </a>
            
        </div>
    )
}

export default Card
