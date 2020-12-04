import React, { useRef, useEffect } from 'react';
import '../App.css';

import Header from '../components/header-component';
import Services from '../components/service-component';
import AboutMe from '../components/home-components/aboutme-component';
import MyWork from '../components/mywork-component';
import Footer from '../components/footer-component';

import Aos from 'aos';
import "aos/dist/aos.css";
import { Power3, gsap, } from 'gsap';

import { useIntersection } from 'react-use';




// const whatIDoArr = [
//     {
//         title: "Data Engineer",
//         image: `${laptop}`,
//         description: "At the moment I use PowerBI to visualize my data and I use the BI connector to connect PowerBI with my data source MongoDB Atlas. Ive used Azure Data Factory and ETL pipeline to ingest data into a Azure Data Lake gen two."
//     },
//     {
//         title: "Skills",
//         image: `${passion}`,
//         description: "ReactJS | Hooks | Context API | Redux | NodeJS | ExpressJS | MongoDB | PowerBI"
//     },
//     {
//         title: "Full Stack Engineer",
//         image: `${laptop}`,
//         description: "I'm more of a UI focused developer. I'm familiar with ReactJS, and tools within its ecosytem like Hooks, and Redux. I also love to work with animations to style up the frontend."
//     }
// ]

function Home() {

  return (
    <div className="App">
        <Header />
        <Services />

        <AboutMe />
        <MyWork />
        <Footer />
    </div>
  );
}

export default Home;
