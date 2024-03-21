import React, { useState } from 'react';
import "./StyleForm.css";
import { Centrado } from '../style-components/Button';

const LoginForm = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", username, password);
    
  };

  return (
    <div className="wrapper active-popup">
      <div className="form-box login">
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="username">Username</label>
            <span className="icon"></span>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <span className="icon"></span>
          </div>

          <div>
            <Centrado>
              <button type="submit" className="btn">Login</button>
              <button className="btn" onClick={onClose}>Close login</button>
            </Centrado>
            

          </div>
          <div>
            
          </div>

        </form>
        
        
      </div>
    </div>
  );
};

export default LoginForm;
