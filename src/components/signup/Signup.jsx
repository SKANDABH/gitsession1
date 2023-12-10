import { Link } from 'react-router-dom';
import './Signup.css';import React, { useState } from 'react';
const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const handleChange =(e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your registration logic here
    console.log('Form submitted:', formData);
    // You can send the form data to your server for further processing
    // For simplicity, we're just logging the data to the console in this example
  };
  return (
    <div className="sign-up-container" >
      <div className="sign-up-box">
        <h2 style={{fontSize:"150px"}}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username"id="user">Email</label>
        <input
          type="email"
          className="form-control"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" id="pass">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn-dark">
        <p>Signup</p>
      </button>
    </form>
        <Link to="/login"style={{position:"relative",left:"940px",top:"500px"}}><h1 id="h">Already have an account? Login here</h1></Link>
      </div>
    </div>
  );
}

export default Signup;
