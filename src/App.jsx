// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import FeatureSection from './FeatureSection';
import Testimonial from './Testimonial';
import PromoSection from './PromoSection'; 
import NewSection from './NewSection'; 
import AdditionalSection from './AdditionalSection'; 
import TestimonialSection from './TestimonialSection';
import FooterSection from './FooterSection';

function App() {
  const [inputText, setInputText] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('navbar-hidden');
      } else {
        navbar.classList.remove('navbar-hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=2b671e8c&s=${inputText}&page=1`);
      setMovies(response.data.Search || []);
    } catch (err) {
      setError('Failed to fetch data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <a href="#">SEMRUSH</a>
          </div>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#company">Company</a></li>
            <li><a href="#login">Log In</a></li>
            <li><a href="#signup" className="signup">Sign Up</a></li>
          </ul>
        </div>
      </nav>

      <div className="header">
        <h1>Movie Search</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Search for movies..."
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && <div className="error">{error}</div>}

      <table>
        <thead>
          <tr>
            <th>Poster</th>
            <th>Title</th>
            <th>Year</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.imdbID}>
              <td>
                <img src={movie.Poster} alt={movie.Title} />
              </td>
              <td>{movie.Title}</td>
              <td>{movie.Year}</td>
              <td>{movie.Type}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <FeatureSection />
      <Testimonial />
      <PromoSection /> 
      <NewSection /> 
      <AdditionalSection />
      <TestimonialSection />
      <FooterSection />
      
    </div>
  );
}

export default App;
