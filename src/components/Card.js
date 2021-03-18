import React from 'react';
import '../styles/Card.css';

function Card({title, img, description}) {
    return (
        <div className="card">
            <img src={img} alt={title}/>
            <div className="card-text">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            
        </div>
    )
}

export default Card
