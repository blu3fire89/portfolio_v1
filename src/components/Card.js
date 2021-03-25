import React from 'react';
import '../styles/Card.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CodeIcon from '@material-ui/icons/Code';

function SiteCard({title, img, description, link}) {
    return (
        <div className="sitecard">
            <h2>{title}</h2>
            <div className="sitecard-image">
                <img src={img} alt={title} />
                <div className="sitecard-hoverItems">
                    <a href={link}>
                        <ExitToAppIcon />
                    </a>
                </div>
            </div>
            <div className="sitecard-description">
                <CodeIcon />
                <p>{description}</p>
            </div>
            
        </div>
    )
}

export default SiteCard
