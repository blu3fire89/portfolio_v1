import React from 'react'
import '../styles/PorfolioCard.css';
import Card from './Card';

function PorfolioCard() {
    return (
        <div className="porfolioCard">
            <h2>I'm the porfolio card</h2>
            <Card 
            title="netflix-clone" 
            link="https://netflix-clone-e4682.web.app"
            img="https://cdn-www.bluestacks.com/bs-images/Image_NF_LI_1.png.png"
            description="this is wowzers" />

            <Card title="slack-clone" 
            link="https://slack-clone-56f5a.web.app"
            img="https://i.pcmag.com/imagery/reviews/07td46ju7p6lLVb0QGwc5VF-6..1569479844.jpg"
            description="this is wowzers" />

            <Card title="instagram-clone" 
            link="https://photo-blog-6c04b.web.app/"
            img="https://neilpatel.com/wp-content/uploads/2017/04/instagram.jpg"
            description="this is wowzers" />

            <Card title="spotify-clone" 
            link="https://spotify-clone-8751c.web.app"
            img="https://digital.hbs.edu/platform-digit/wp-content/uploads/sites/2/2020/04/spotify-logo-1920x1080-2.jpg"
            description="this is wowzers" />
        </div>
    )
}

export default PorfolioCard
