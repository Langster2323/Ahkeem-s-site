import React, {useRef, useEffect} from 'react';
import { TweenMax, Power3 } from 'gsap';

import ahkeem from '../assets/ahkeem-in-japan.jpg';

const Header = () => {
    let img__intro = useRef(null);
    let sub__intro = useRef(null);
    let header__intro = useRef(null);

    useEffect(() => {
        TweenMax.from(
            header__intro,
            3,
            {
                opacity: 0,
                x: -520,
                ease: Power3.easeOut
            }
        )
        TweenMax.to(
            header__intro,
            3,
            {
                opacity: 1,
                x: 20,
                ease: Power3.easeOut
            }
        )
        TweenMax.from(
            img__intro,
            3,
            {
                opacity: 0,
                y: 520,
                ease: Power3.easeOut
            }
        )
        TweenMax.to(
            img__intro,
            3,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeOut
            }
        )
        TweenMax.from(
            sub__intro,
            3,
            {
                opacity: 0,
                x: 520,
                ease: Power3.easeOut
            }
        )
        TweenMax.to(
            sub__intro,
            3,
            {
                opacity: 1,
                x: 15,
                ease: Power3.easeOut
            }
        )     
    }, [])
    return (
        <section className="intro" id="home">
            <h1 ref={el => {header__intro = el}} className="section__title section__title--intro">
                Hi, I am <strong>Ahkeem Lang!</strong>
            </h1>
            <p ref={el => {sub__intro = el}} className="section__subtitle section__subtitle--intro">Full Stack Engineer | Data Engineer</p>
            <img ref={el => {img__intro = el}} src={ahkeem} alt="Ahkeem" className="intro__img" />
        </section>
    )
}

export default Header;