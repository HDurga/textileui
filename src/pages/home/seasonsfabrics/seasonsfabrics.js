import React from 'react';
import { useTranslation } from 'react-i18next';
import './seasonsfabrics.css';

// Use a different name for the placeholder image URL
const placeholderImage = "https://via.placeholder.com/300x200?text=Cotton+Fabric";

const SeasonsFabrics = () => {
  const { t } = useTranslation();

  const seasons = ['spring', 'summer', 'fall', 'winter'];

  return (
    <div className="seasons-fabrics-container">
      <div className="seasons-header">
        <h1>{t('seasons.favorites.title')}</h1>
        <p>{t('seasons.favorites.description')}</p>
      </div>
      
      <div className="seasons-grid">
        {seasons.map((season) => (
          <div key={season} className="season-section">
            <h2 className="season-title">{t(`seasons.favorites.${season}.name`)}</h2>
            <div className="fabrics-grid">
              {Object.keys(t(`seasons.favorites.${season}.fabrics`, { returnObjects: true })).map((fabricKey, index) => (
                <div key={index} className="fabric-card">
                  <div className="fabric-image">
                    <img 
                      src={placeholderImage}  // Use the placeholder image URL
                      alt={t(`seasons.favorites.${season}.fabrics.${fabricKey}.name`)} 
                    />
                  </div>
                  <div className="fabric-content">
                    <h3>{t(`seasons.favorites.${season}.fabrics.${fabricKey}.name`)}</h3>
                    <p>{t(`seasons.favorites.${season}.fabrics.${fabricKey}.description`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonsFabrics;