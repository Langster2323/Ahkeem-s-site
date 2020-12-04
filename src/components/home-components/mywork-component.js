import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

import tea from '../../assets/tea.jpg';
import tianshu from '../../assets/tianshu.jpg';
import strength from '../../assets/strength.jpg';
import kyoto from '../../assets/kyoto.jpg';

const MyWork = () => {
    useEffect(() => {
        Aos.init({duration: 2000})    
    }, [])
    return (
        <section className="my-work" id="work">
            <h2 className="section__title section__title--work">My work</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
            
            <div className="portfolio">
                <figure data-aos="zoom-out">
                    <a href="https://github.com/Langster2323/Tic-Tac-Toe-Minimax" className="portfolio__item">
                        <img src={tea} alt="" className="portfolio__img" />
                        <figcaption className="caption">Tic-Tac-Toe Minimax
                        <br /> <span className="sub__caption">Built with JavaScript. You're up against an 
                        AI, you'll nearly always loose against</span></figcaption>
                    </a>
                </figure>
                
                <figure data-aos="zoom-out">
                    <a href="https://github.com/Langster2323/reacted-auth" className="portfolio__item">
                        <img src={tianshu} alt="" className="portfolio__img" />
                        <figcaption className="caption">React Authentication
                        <br /> <span className="sub__caption">Authenticated user in ReactJS.</span></figcaption>
                        
                    </a>
                </figure>
                <figure data-aos="zoom-out">
                <a href="https://github.com/Langster2323/RSVP-React" className="portfolio__item">
                    <img src={kyoto} alt="" className="portfolio__img" />
                    <figcaption className="caption move-horizontal">RSVP
                    <br /> <span className="sub__caption">A React and Redux app to rsvp 
                    for your next event.</span></figcaption>
                    
                </a>
                </figure>
                <figure data-aos="zoom-out">
                <a href="https://github.com/Langster2323/Tabikko-" className="portfolio__item">
                    <img src={strength} alt="" className="portfolio__img" />
                    <figcaption className="caption move-horizontal">Exercise Log
                    <br /> <span className="sub__caption">MERN stack app to log your 
                    workouts.</span></figcaption>
                </a>
                </figure>
            </div>
        </section>
    )
}

export default MyWork;