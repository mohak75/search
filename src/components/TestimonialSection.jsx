import React, { useState } from 'react';
import './TestimonialSection.css';

const testimonials = [
  {
    quote: "I’ve been using Semrush for 7+ years now and heavily rely on it to help me top of Google.",
    name: "Casey Smith",
    position: "Digital Marketing Director",
    company: "Nlyte Software",
    image: "https://cdn.semrush.com/static/index/testimonials/Casey_Camilleri_Marx.335cc28f69cb.webp"
  },
  // Add more testimonials here
  {
    quote: "Semrush has been an invaluable tool in our marketing strategy.",
    name: "John Doe",
    position: "SEO Specialist",
    company: "Tech Solutions",
    image: "https://cdn.semrush.com/static/index/testimonials/Casey_Camilleri_Marx.335cc28f69cb.webp"
  }
];

function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-section">
      <h2>Here's why marketers ❤️ Semrush</h2>
      <div className="testimonial-tabs">
        <button>Marketing Suite</button>
        <button>SEO</button>
        <button>Content marketing</button>
        <button>Market research</button>
        <button>Advertising</button>
        <button>Social media</button>
      </div>
      <div className="testimonial-navigation">
        <button className="nav-left" onClick={handlePrevious}>{"<"}</button>
        <p>{`${currentTestimonial + 1}/${testimonials.length}`}</p>
        <button className="nav-right" onClick={handleNext}>{">"}</button>
      </div>
      <blockquote>
        {testimonials[currentTestimonial].quote}
      </blockquote>
      <div className="reviewer-info">
        <img src={testimonials[currentTestimonial].image} alt="Reviewer" />
        <p>{testimonials[currentTestimonial].name}<br />{testimonials[currentTestimonial].position}<br />{testimonials[currentTestimonial].company}</p>
      </div>
    </div>
  );
}

export default TestimonialSection;
