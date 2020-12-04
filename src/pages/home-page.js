import React from 'react';
import '../App.css';

import Header from '../components/home-components/header-component';
import Services from '../components/home-components/service-component';
import AboutMe from '../components/home-components/aboutme-component';
import MyWork from '../components/home-components/mywork-component';
import Footer from '../components/home-components/footer-component';

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
