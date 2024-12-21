import './contactPage.css'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react"


const ContactPage = () => {

  const [typingStatus, setTypingStatus] = useState("human1")

  return (
    <div className='contactPage'>
      <img src="/orbital.png" alt="" className="orbital"/>
      <div className="left">
        <h1>FiqGPT</h1>
        <h2>This application is newly constructed.</h2>
        <h3>Please contact us for fixes. Thank you in advance!</h3>
        <br></br>
        <h3>
  <a href="mailto:rusydda@gmail.com">Email Us</a>
</h3>
        <Link to="/dashboard">Return</Link>

      </div>
      
        <div className="terms">
          <img src="/catlogo.png" alt="" />
          <div className ="links">
          <Link to="/">Terms of Service</Link>
          <span></span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  )
}

export default ContactPage