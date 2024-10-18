import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext'; // Import the context provider
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import './styles.css';


function App() {
  return (
    <AuthProvider> {/* Wrapping with AuthProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Login />} /> {/* Redirect unknown routes to Login */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
