import React, { useEffect,useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';   
import './Home.css';
import { AuthContext } from '../AuthContext'; // Import AuthContext
import { fetchData } from '../apiService'; 
import MarketingPosts from '../MarketingPosts';


function Home() {
  const { user, logout } = useContext(AuthContext); // Get user and logout function from context
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout(); // Perform any logout logic (like clearing tokens, etc.)
    navigate('/login'); // Redirect to the login page
  };

  const handleInputChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormSubmitted(true);
  };

  return (
    <div>
    <div>
      <div>
      <h1>Welcome, {user ? user.email : 'Guest'}</h1>
    </div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#search"><i className="fa fa-search"></i></a></li>
          <li className="logout">
          <button id="logoutButton" onClick={handleLogout}>Logout</button>
        </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <h1>Welcome to Our Digital Marketing System</h1>
        <p>Maximize your business potential with our comprehensive digital marketing solutions.</p>
        <button className="cta-button">Get Started</button>
      </section>

      {/* About Us Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>We are a leading digital marketing agency with a passion for helping businesses grow online. Our team of experts specializes in SEO, content marketing, social media management, and PPC advertising. With years of experience and a track record of success, we are dedicated to delivering top-quality services to our clients.</p>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <ServiceCard
            title="SEO Optimization"
            content="Improve your search engine rankings with our top-notch SEO services."
          />
          <ServiceCard
            title="Content Marketing"
            content="Engage your audience with high-quality and relevant content."
          />
          <ServiceCard
            title="Social Media Management"
            content="Grow your brand's presence on social media platforms."
          />
          <ServiceCard
            title="Pay-Per-Click Advertising"
            content="Maximize ROI with our targeted PPC campaigns."
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-list">
          <TestimonialCard
            name="John Doe"
            feedback="This service transformed our business. Highly recommend!"
          />
          <TestimonialCard
            name="Jane Smith"
            feedback="Exceptional quality and great results. We saw a significant increase in traffic."
          />
          <TestimonialCard
            name="Michael Brown"
            feedback="Professional and reliable. The best marketing team we've worked with."
          />
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        {formSubmitted ? (
          <p>Thank you for contacting us! We'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={contactForm.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={contactForm.email}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={contactForm.message}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        )}
      </section>
      <div>
      <MarketingPosts />
    </div>
      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Digital Marketing. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
}

// ServiceCard Component
function ServiceCard({ title, content }) {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

// TestimonialCard Component
function TestimonialCard({ name, feedback }) {
  return (
    <div className="testimonial-card">
      <p>"{feedback}"</p>
      <h4>- {name}</h4>
    </div>
  );
}

export default Home;
