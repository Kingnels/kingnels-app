import { Button } from "./Button"
import './Hero.css'
import '../App.css'
import { FaPlayCircle } from "react-icons/fa"


function Hero() {
  return (
    <div className="Hero-container">
        <video src="..//../public/videos/video-2.mp4" autoPlay loop muted></video>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>

        <div className="hero-btns">
            <Button 
                className="btn" 
                buttonStyle='btn--outline' 
                buttonSize="btn--large">
                GET STARTED 
            </Button>
  
            <Button 
                className="btn" 
                buttonStyle='btn--primary' 
                buttonSize="btn--large">
                WATCH TRAILER <FaPlayCircle className="faplay"/> 
            </Button>
        </div>
    </div>
  )
}

export default Hero