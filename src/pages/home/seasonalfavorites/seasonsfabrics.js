import React from 'react';
import { useTranslation } from 'react-i18next';
import './seasonsfabrics.css';

const seasonalFabrics = {
  spring: [
    { name: 'Cotton Lawn', image: '/seasonal.jpg' },  // Path relative to public directory
    { name: 'Light Linen', image: '/seasonal.jpg' },
    { name: 'Floral Cotton', image: '/seasonal.jpg' }
  ],
  summer: [
    { name: 'Cotton Voile', image: '/seasonal1.jpg' },
    { name: 'Silk Chiffon', image: '/seasonal1.jpg' },
    { name: 'Bamboo Cotton', image: '/seasonal1.jpg' }
  ],
  fall: [
    { name: 'Wool Blend', image: '/seasonal2.jpg'}, 
    { name: 'Tweed', image: '/seasonal2.jpg' },  
    { name: 'Corduroy', image: '/seasonal2.jpg' }
  ],
  winter: [
    { name: 'Wool Cashmere', image: '/summer.jpg' },
    { name: 'Velvet', image: '/summer.jpg' },
    { name: 'Flannel', image: '/summer.jpg' }
  ]
};

const SeasonsFabrics = () => {
  const { t } = useTranslation();
  const seasons = ['spring', 'summer', 'fall', 'winter'];

  return (
    <div className="seasons-fabrics-container">
      <div className="seasons-header">
        <h1>{t('seasons.favorites.title')}</h1>
        <p>{t('seasons.favorites.description')}</p>
      </div>
      
      <div className="seasons-slider">
        <div className="seasons-track">
          {seasons.map((season) => (
            <div key={season} className="season-section">
              <h2 className="season-title">{t(`seasons.favorites.${season}.name`)}</h2>
              <div className="fabrics-grid">
                {seasonalFabrics[season].map((fabric) => (
                  <div key={fabric.name} className="fabric-card">
                    <div className="fabric-image">
                      <img 
                        src={fabric.image}
                        alt={t(`seasons.favorites.${season}.fabrics.${fabric.name}.name`)} 
                      />
                    </div>
                    <div className="fabric-content">
                      <h3>{t(`seasons.favorites.${season}.fabrics.${fabric.name}.name`)}</h3>
                      <p>{t(`seasons.favorites.${season}.fabrics.${fabric.name}.description`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeasonsFabrics;