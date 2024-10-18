import React, { useState,  useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext'; // Import AuthContext

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Get the login function from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Email format validation (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      return;
    }

    // Retrieve the stored email and password from localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Validate the entered credentials against the stored values
    if (email === storedEmail && password === storedPassword) {
      login({ email }); // Call the login function from context
      navigate('/home'); // Navigate to the home page if credentials are valid
    } else {
      setError('Invalid email or password'); // Display an error message if credentials are invalid
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        {error && <div className="error">{error}</div>}
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
}

export default Login;
