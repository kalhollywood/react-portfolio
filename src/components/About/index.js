import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import '../Layout/index.scss'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>

      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"About Me".split("")}
              idx={15}
            />
          </h1>
          <p className='about-text'>After working in finance and project management related roles for over 14 years, I decided to leave my safe but ultimately unfulfilling career and drop everything to jump into the world of tech.</p>
          <p className='about-text'>I was fortunate enough to be accepted onto the School of Code bootcamp in April 2022 and in 16 weeks went from beginner to full-stack developer.</p>
          <p className='about-text'>This is just the start of my tech journey but I'm excited to explore a career where I will build things I can be proud of.</p>
        </div>
        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNodeJs} color="#333333" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>

  );
}

export default About;