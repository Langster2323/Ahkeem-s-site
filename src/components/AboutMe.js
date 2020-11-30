import React, {useRef, useEffect} from 'react';
import { useIntersection } from 'react-use';
import Aos from 'aos';
import "aos/dist/aos.css";
import { gsap, Power3 } from 'gsap';

import potato from '../assets/potato-japan.jpg';

const AboutMe = () => {
    
    let myselfRef = useRef(null);

    const intersectionMyself = useIntersection(myselfRef, {
        root: null,
        rootMargin: "0px",
        threshold: 0.7
    });

    useEffect(() => {
        Aos.init({duration: 2000})    
    }, [])

    const fadeIn = element => {
        gsap.to(element, 3, {
            opacity: 1,
            y: 0,
            ease: Power3.easeOut,
            stagger: {
                amount: .3
            }
        })
    }

    const fadeOut = element => {
        gsap.to(element, 3, {
            opacity: 0,
            y: -20,
            ease: Power3.easeOut
        })
    }

    intersectionMyself && intersectionMyself.intersectionRatio < 0.7 ? fadeOut(".fade") : fadeIn(".fade")
    return (
        <section className="about-me" id="about">
           <h2 data-aos="fade-up" className="section__title section__title--about">Who I am</h2>
           <p data-aos="fade-left" className="section__subtitle section__subtitle--about">Developer based out of ATX</p>
           
           <div ref={myselfRef} className="about-me__body">
               <p className="fade">Here's a little bit about me. I'm originally from Chicago
                 I moved to Austin in the summer of 2016 after receiving my BA in Philosophy from Eastern Illinois University
                 to follow my dream and passion to become a Software Developer. I use to break dance with my dance crew 
                 up in Chicago. Sometimes you'll catch me doing a move or two.</p>
               <p className="fade">I love traveling, I've traveled all over the world since I can remember, I was fortuante to experience many 
                 different beautiful cultures and make friends nearly on every continent. I love Japanese culture, 
                 I've visited Japan three times already to visit my wife's family and our friends.</p>
                <p className="fade">When I'm not at the computer I'm out playing 2v2 or 4v4 sand volleyball with my wife and our 
                 friends. I lead a group that meets nearly every night that likes to play 2v2 and 4v4 sand volleyball.
                 It's pretty tough to get us off the courts!</p>
           </div>
           
           <img data-aos="fade-right" src={potato} alt="Jane leaning against a bus" className="about-me__img" />
        </section>
    )
}

export default AboutMe;