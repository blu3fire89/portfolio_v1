import React from 'react'
import '../styles/PorfolioCard.css';
import Card from './Card';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function PorfolioCard() {
    return (
        <div className="porfolio">
            <div className="porfolioHeader">
                <ArrowRightIcon />
                <h2 id="portfolio">Portfolio</h2>
                
            </div>
            <div className="porfolioCard">
                <Card 
                title="netflix-clone"
                description="reactJs, firebase,TMDB API, firebase, resonsive design, trailer, react hooks functional"
                img="https://www.nxtbookmedia.com/wp-content/uploads/2014/06/netflix.png"
                link="https://netflix-clone-e4682.web.app"
                />

                <Card 
                title="slack-clone"
                description="reactJS, user auth(google), firebase, responsive design"
                img="https://i.pcmag.com/imagery/reviews/07td46ju7p6lLVb0QGwc5VF-6..1569479844.jpg"
                link="https://slack-clone-56f5a.web.app"
                />

                <Card 
                title="spotify-clone"
                description="reactJS, user auth(spotify acc), spotify API, firebase, responsive design, material UI(icons), react context API"
                img="https://digital.hbs.edu/platform-digit/wp-content/uploads/sites/2/2020/04/spotify-logo-1920x1080-2.jpg"
                link="https://spotify-clone-8751c.web.app"
                />

                <Card 
                title="instagram-clone"
                description="reactJS, user auth(email, password), firebase, reponsive design, image upload"
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCaRDz6EgjznMBXo5XvXtmWKYtR0UdYdtC2A&usqp=CAU"
                link="https://photo-blog-6c04b.web.app/"
                />

                <Card 
                title="yelpcamp"
                description="vanillaJS, restful API, user auth, mongoDB, heroku"
                img="https://user-images.githubusercontent.com/22425638/58050093-0dd10f80-7b6c-11e9-87d6-fa2c7539bdcc.png"
                link="https://aqueous-mesa-88537.herokuapp.com/"
                />
            </div>
            
        </div>
    )
}

export default PorfolioCard
