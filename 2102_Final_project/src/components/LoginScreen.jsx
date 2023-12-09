import React, { useState } from 'react';
import './LoginScreen.css';

function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  };

  const handleLogin = () => {
    setEmailError('');
    setPasswordError('');

    if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email.');
    }

    if (!isValidPassword(password)) {
      setPasswordError('Please enter a valid password. It should have at least one lowercase, one uppercase, one special character, one number, and be at least 8 characters long.');
    }

    if (isValidEmail(email) && isValidPassword(password)) {
      onLogin();
    }
  };

  return (
    <div className="login-container">
      <h2>LOGIN PAGE</h2>
      <div className="form-group">
        <label>EMAIL:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        {emailError && <p className="error-message">{emailError}</p>}
      </div>
      <div className="form-group">
        <label>PASSWORD:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {passwordError && <p className="error-message">{passwordError}</p>}
      </div>
      <button className="login-button" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginScreen;
