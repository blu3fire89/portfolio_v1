import React from 'react';
import '../styles/Card.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function SiteCard({title, img, description, link}) {
    return (
        <div className="sitecard">
            <div className="sitecard-image">
                <img src={img} alt={title} />
                <div className="sitecard-hoverItems">
                    <a href={link}>
                        <ExitToAppIcon />
                    </a>
                </div>
            </div>
            
                <h2>{title}</h2>
                <p>{description}</p>
        </div>
    )
}

export default SiteCard
