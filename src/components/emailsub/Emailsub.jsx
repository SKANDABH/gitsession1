import React,{useState} from 'react'
import './Emailsub.css'
import emailback from '../assets/emailph.webp'
import axios from 'axios';
const Emailsub = () => {

  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend endpoint
      await axios.post('/subscribe', { email });
      console.log('Subscription successful!');
    } catch (error) {
      console.error('Error subscribing:', error.message);
    }
  };

  return (
    <div className='emailsub' style={{ backgroundImage: `url(${emailback})`,backgroundSize: 'cover' }}>
        <div className='text'>
            <p id="para">Get Exclusive Offers On Your Email</p>
            <p id="para1" >Stay Updted By Subscribing</p>
        </div>
        <div className='email'>
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input placeholder='Enter your email-id'
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><button className="btnemail"type="submit">SUBSCRIBE</button>
        </form>
            
                
            
        </div>
    </div>
  )
}

export default Emailsub