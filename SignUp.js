import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    // Email format validation (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      return;
    }

    // Password strength validation: At least 8 characters, at least one letter, one number, and special characters allowed
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError('Password must be at least 8 characters long, include at least one letter, one number, and may include special characters');
      return;
    }

    // Password confirmation validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Store the email and password in localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Navigate to the login page
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div>
          <input 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/">Login</a></p>
    </div>
  );
}

export default SignUp;
