// import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [" ", "K", "a", "l"]
  const jobArray = `Full-stack Developer`.split('')

  // This useEffect changes the css class for the heading letters after 4 seconds to allow for the rolling animation to finish and then set it to the hover rubber band effect class.
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>


      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            {/* This component passes down the letterClass state and the string to map through each letter, the index is set to 15 to give it a 1.5sec delay before starting */}
            <AnimatedLetters letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters letterClass={letterClass}
              strArray={jobArray}
              idx={19}
            />
          </h1>
          <h2>Based in Sussex</h2>
          <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>
      </div >
      <Loader type='pacman' />
    </>
  );
}

export default Home;