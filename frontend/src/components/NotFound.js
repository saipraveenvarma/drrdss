import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.errorCode}>404</h1>
        <p style={styles.errorMessage}>Oops! The page you're looking for isn't here.</p>
        <p style={styles.errorDescription}>
          You might have the wrong address, or the page may have moved.
        </p>
        <Link 
          to="/" 
          style={styles.homeButton} 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #1d3557, #457b9d)',
    color: '#f1faee',
    fontFamily: "'Poppins', sans-serif",
  },
  content: {
    textAlign: 'center',
    animation: 'fadeIn 1.2s ease-in-out',
  },
  errorCode: {
    fontSize: '8rem',
    margin: '0',
    fontWeight: '800',
    color: '#e63946',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
  },
  errorMessage: {
    fontSize: '1.5rem',
    marginTop: '-20px',
    marginBottom: '10px',
    fontWeight: '500',
  },
  errorDescription: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    color: '#a8dadc',
  },
  homeButton: {
    textDecoration: 'none',
    backgroundColor: '#e63946',
    color: '#f1faee',
    padding: '10px 20px',
    borderRadius: '25px',
    transition: 'background-color 0.3s, transform 0.2s',
  },
};

// Hover effect functions
const handleMouseEnter = (event) => {
  event.target.style.backgroundColor = '#f77f00';
  event.target.style.transform = 'scale(1.1)';
};

const handleMouseLeave = (event) => {
  event.target.style.backgroundColor = '#e63946';
  event.target.style.transform = 'scale(1)';
};

export default NotFound;