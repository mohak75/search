import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './global.css'; // Import global styles
import './App.css'; // Import App-specific styles

import Navbar from './components/Navbar';
import MovieSearch from './components/MovieSearch';
import SignUp from './components/SignUp';
import Login from './components/Login';
import FeatureSection from './components/FeatureSection';
import Testimonial from './components/Testimonial';
import PromoSection from './components/PromoSection';
import NewSection from './components/NewSection';
import AdditionalSection from './components/AdditionalSection';
import TestimonialSection from './components/TestimonialSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <>
              <MovieSearch />
              <FeatureSection />
              <Testimonial />
              <PromoSection />
              <NewSection />
              <AdditionalSection />
              <TestimonialSection />
              <FooterSection />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
