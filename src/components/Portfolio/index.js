import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import portfolioData from '../../data/portfolio.json';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  console.log(portfolioData)


  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        portfoli

      </div>
    )
  }


  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Projects".split("")}
            idx={15}
          />
        </h1>
        {/* <div>{renderPortfolio()}</div> */}


      </div>
      <Loader type='pacman' />
    </>

  );
}

export default Portfolio;