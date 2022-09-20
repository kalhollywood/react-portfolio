import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import portfolioData from '../../data/portfolio.json';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  // This useEffect changes the css class for the heading letters after 3 seconds to allow for the rolling animation to finish and then set it to the hover rubber band effect.
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])


  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">

        {/* The code below maps through a portfolioData object with the details of each project, title, image etc can then be rendered and an associated link attached to the button for each project taking the user to the github page. */}
        {
          portfolio.map((port, idx) => {
            return (
              <div key={idx} className="image-box">
                <img src={port.cover} alt="portfolio" className="portfolio-image" />
                <div className="content">
                  <p className="title">
                    {port.title}
                  </p>
                  <h4 className="description">{port.description}</h4>
                  <button className="btn" onClick={() => window.open(port.url)}>View</button>
                </div>
              </div>

            )
          })
        }
      </div>
    )
  }


  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          {/* This component passes down the letterClass state and the string to map through each letter, the index is set to 15 to give it a 1.5sec delay before starting */}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Projects".split("")}
            idx={15}
          />
        </h1>
        {/* Line below calls the renderPortfolio function and passes in the object.portfolio */}
        <div>{renderPortfolio(portfolioData.portfolio)}</div>


      </div>
      <Loader type='pacman' />
    </>

  );
}

export default Portfolio;