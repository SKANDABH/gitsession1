import './Hero.css'
import img from '../assets/herobat.jpg'
import React, { useState } from 'react';
import Signup from '../signup/Signup.jsx'; 
const Hero = () => {  
    const [showSignup, setShowSignup] = useState(false);
    console.log('showSignup:', showSignup);
  const handleGetInTouch = () => {
    setShowSignup(true);
   
  }; const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here
  };
  return (
    <div className='hero'>
        <div className='hero-left'><img id='imgbat' src={img}alt="" /></div>

        <div className='hero-right'>        <h1>Uninterrupted Power</h1>
<h1>With Livguard</h1>
<form onSubmit={handleSubmit}>
      {/* Your form fields go here */}
      <button id='herobtn' onClick={handleGetInTouch}>get in touch with us</button>
      </form>
</div> {showSignup && (
        <div className="signup-overlay">
          <Signup />
        </div>
      )}
    </div>

        
    
  );
}

export default Hero