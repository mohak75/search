// AdditionalSection.js
import React from 'react';
import './AdditionalSection.css';

function AdditionalSection() {
  return (
    <div className="additional-section">
      <div className="ceo-message">
        <div className="ceo-image-container">
          <img src="https://cdn.semrush.com/static/index/Oleg_Shchegolev_in_hat@2x.be0ac44e5cf1.webp" alt="Oleg Shchegolev, CEO and Founder" />
        </div>
        <div className="message-content">
          <h2>Our CEO will eat his hat if...</h2>
          <ul>
            <li><span className="tick">✔</span> Access over 25 billion keywords for 130 countries</li>
            <li><span className="tick">✔</span> Run in-depth website audit based on 130+ checks</li>
            <li><span className="tick">✔</span> Get recommendations to improve your content to increase search rankings</li>
            <li><span className="tick">✔</span> Track and analyze competitor websites and marketing strategies</li>
            <li><span className="tick">✔</span> Create and track your PPC campaigns</li>
            <li><span className="tick">✔</span> Draft, schedule and post content on social media</li>
            <li><span className="tick">✔</span> Create and schedule white-labeled or branded reports</li>
          </ul>
          <button className="discover-button">Discover all SEMrush features</button>
        </div>
      </div>
    </div>
  );
}

export default AdditionalSection;
