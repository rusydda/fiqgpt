import './homepage.css'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react"
import { useNavigate } from 'react-router-dom'


const Homepage = () => {

  const [typingStatus, setTypingStatus] = useState("human1")
  const navigate = useNavigate();

  const handleRedirect = (e) => {
    e.preventDefault();
    const confirmMessage = "Please open in desktop mode if you're using a mobile phone for best experiences.";
    if (window.confirm(confirmMessage)) {
      navigate("/dashboard");
    }
  };

  return (
    <div className='homepage'>
      <img src="/orbital.png" alt="" className="orbital"/>
      <div className="left">
        <h1>FiqGPT</h1>
        <h2>Your virtual companion, built for your every need.</h2>
        <h3>Available at your fingertips—on your phone, computer, or smart device—making it a reliable and consistent helper.</h3>
        <a href="/dashboard" onClick={handleRedirect}>Let's Start</a>
      
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot"/>
          <div className="chat">
            <img src= {typingStatus ==="human1" 
                      ? "/human1.jpeg" 
                      : typingStatus === "human2" 
                      ? "/human2.jpeg" 
                      : "bot.png"} 
                    alt="" className="bot"/>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Human: We produce food for Mice',
                2000, ()=>{
                  setTypingStatus("bot")
                },
                'Bot: We produce food for Hamsters',
                2000, ()=>{
                  setTypingStatus("human2")
                },
                'Human2: We produce food for Guinea Pigs',
                2000, ()=>{
                  setTypingStatus("bot")
                },
                'Bot: We produce food for Chinchillas',
                2000, ()=>{
                  setTypingStatus("human1")
                },
              ]}
            wrapper="span"
            repeat={Infinity}
            cursor={true}
            omitDeletionAnimation={true}
            />

          </div>
        </div>
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

export default Homepage