import React, { useState } from 'react';
import './FeatureSection.css';

function FeatureSection() {
  const [activeFeature, setActiveFeature] = useState('SEO');

  const features = [
    {
      id: 'SEO',
      title: 'SEO',
      description: 'Grow organic traffic with our complete and easy SEO tools & workflow.',
      img: 'https://cdn.semrush.com/static/index/tools-new/seo.94e1f354aed0.svg'
    },
    {
      id: 'Content Marketing',
      title: 'Content Marketing',
      description: 'Analyze any domain’s backlink profile and track your content performance.',
      img: 'https://cdn.semrush.com/static/index/tools-new/content_marketing.72972ff0d800.svg'
    },
    {
      id: 'Market Research',
      title: 'Market Research',
      description: 'Run technical SEO audits and uncover millions of national & local keywords.',
      img: 'https://cdn.semrush.com/static/index/tools-new/competitive_research.33252b03170c.svg'
    },
    {
      id: 'Advertising',
      title: 'Advertising',
      description: 'Track your SERP positions daily and optimize your ads for better ROI.',
      img: 'https://cdn.semrush.com/static/index/tools-new/ppc.fcd52c3389ab.svg'
    },
    {
      id: 'Social Media',
      title: 'Social Media',
      description: 'Manage all your social media profiles in one place and boost your engagement.',
      img: 'https://cdn.semrush.com/static/index/tools-new/social_media.6b7572746c09.svg'
    },
    {
      id: 'Agency Solutions',
      title: 'Agency Solutions',
      description: 'Use our advanced tools to deliver exceptional results for your clients.',
      img: 'https://cdn.semrush.com/static/index/tools-new/agency.37f691e98e26.svg'
    }
  ];

  const renderFeatureContent = () => {
    const feature = features.find(f => f.id === activeFeature);
    return (
      <div className="feature-content">
        <img src={feature.img} alt={feature.title} />
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    );
  };

  return (
    <div className="feature-section">
      <h2>See what's inside</h2>
      <div className="feature-nav">
        {features.map(feature => (
          <button
            key={feature.id}
            className={`feature-button ${feature.id === activeFeature ? 'active' : ''}`}
            onClick={() => setActiveFeature(feature.id)}
          >
            {feature.title}
          </button>
        ))}
      </div>
      <div className="feature-details">
        {renderFeatureContent()}
      </div>
    </div>
  );
}

export default FeatureSection;
