// Testimonial.js
import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <blockquote className="testimonial-quote">
        “Semrush is like a keyword research tool, Google Trends, Moz,
        Hootsuite and SimilarWeb in one.”
      </blockquote>
      <div className="testimonial-author">
        <div className="author-image"></div>
        <div className="author-details">
          Mario León Rojas
          <span className="author-title">Performance Marketing Specialist, Banco del Sol</span>
        </div>
      </div>
      <div className="testimonial-source">Source: Semrush's 62 reviews</div>
    </div>
  );
};

export default Testimonial;
