import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {/* The mapping method below takes each character in the string passed down and assigns it a key and a className which is initially the bounce in animation with a slightly increasing delay on each character and then becomes the rubberband hover class when the useEffect changes the letterclass state. */}
      {
        strArray.map((char, i) => (
          <span key={char + i} className={`${letterClass} _${i + idx}`}>
            {char}

          </span>
        ))
      }
    </span>
  )
};

export default AnimatedLetters;
//test