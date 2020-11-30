import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

library.add(faGithub, faLinkedin, faArrowLeft, faArrowRight)

const Footer = () => {
    return (
        <footer className="footer">
            
            <a href="mailto:hello@jane.dev" className="footer__link">langahkeem@gmail.com</a>
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com/Langster2323">
                    <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://www.linkedin.com/in/ahkeem-lang-03667510b/">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;