import React, { useEffect } from 'react';
import './App.css';
import ReactGA from 'react-ga';
import Home from './pages/home-page';

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

function initializeReactGA() {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING);
    ReactGA.pageview(window.location.pathname + window.location.search);
}

function App() {
    useEffect(() => {
        initializeReactGA();
    }, [])

  return (
    <div className="App">
        <Home />
    </div>
  );
}

export default App;
