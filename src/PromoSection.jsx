// PromoSection.js
import React from 'react';
import './PromoSection.css';

const PromoSection = () => {
  return (
    <div className="promo-section">
      <div className="promo-item">
        <div className="promo-icon heart-icon"></div>
        <p>10M marketing professionals have already used Semrush</p>
      </div>
      <div className="promo-item">
        <div className="promo-icon trophy-icon"></div>
        <p>21 international awards as best SEO software suite</p>
      </div>
      <div className="promo-item">
        <div className="promo-icon graph-icon"></div>
        <p>30% Fortune 500 companies use Semrush as their go-to marketing tool</p>
      </div>
    </div>
  );
};

export default PromoSection;
