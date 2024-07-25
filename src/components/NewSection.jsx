import React from 'react';
import './NewSection.css';

const NewSection = () => {
  return (
    <section className="new-section">
      <div className="content">
        <div className="info">
          <h2>More data. More insights</h2>
          <p>With the size of our SEO databases and speed of our backlink crawler, imagine what you can achieve if you have the insights your competitors don’t.</p>
          <button className="learn-more">Learn more</button>
        </div>
        <div className="metrics">
          <div className="metric">
            <span className="metric-value">25B</span>
            <span className="metric-label">keywords</span>
          </div>
          <div className="metric">
            <span className="metric-value">43T</span>
            <span className="metric-label">backlinks</span>
          </div>
          <div className="metric">
            <span className="metric-value">808M</span>
            <span className="metric-label">domain profiles</span>
          </div>
          <div className="metric">
            <span className="metric-value">140</span>
            <span className="metric-label">geo databases</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSection;
