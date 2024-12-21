import './upgradePage.css'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react"


const UpgradePage = () => {

  const [typingStatus, setTypingStatus] = useState("human1")

  return (
    <div className='upgradePage'>
      <img src="/orbital.png" alt="" className="orbital"/>
      <div className="left">
        <h1>FiqGPT</h1>
        <h2>Upgrades is coming soon. Stay tuned!</h2>
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

export default UpgradePage