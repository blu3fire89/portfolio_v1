import React from 'react';
import '../styles/Card.css';

function Card({title, img, description, link, right}) {
    return (
        <div className="card">
            {right ? (
                <a className="card-right" href={link} target="_blank" rel="noreferrer"> 
                    <div className="card-text">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <img className="cardImage" src={img} alt={title}/>
                </a>
            ): (
                
                <a className="card-left" href={link} target="_blank" rel="noreferrer"> 
                    <img className="cardImage" src={img} alt={title}/>
                    <div className="card-text">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    
                </a>
            )}
        </div>
    )
}

export default Card
