import './explorePage.css'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react"


const ExplorePage = () => {

  const [typingStatus, setTypingStatus] = useState("human1")

  return (
    <div className='explorePage'>
      <img src="/orbital.png" alt="" className="orbital"/>
      <div className="left">
        <h1>FiqGPT</h1>
        <h2>Built on 2024</h2>
        <h3>Available at your fingertips—on your phone, computer, or smart device—making it a reliable and consistent helper.</h3>
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

export default ExplorePage