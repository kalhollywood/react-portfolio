import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
      console.log("hello")
    }, 3000)
  }, [])

  const sendEmail = async (e) => {
    e.preventDefault()

    await emailjs.sendForm("service_8f8da4e", "template_oiobccy", form.current, '1bEXXNm7c17bivL1q').then(
      () => {
        alert('Message sent')
        window.location.reload(false)
      },
      () => {
        alert('Failed to send message')
      }
    )
  }

  return (
    <>
      <div className='container contact-form'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Contact Me".split("")}
              idx={15} />
          </h1>
          <p>
            Please submit the form below to get in touch with me.
          </p>
          <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type='pacman' />

    </>

  );
}

export default Contact;