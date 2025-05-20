import React from 'react';
import { useTranslation } from 'react-i18next';
import './seasonsfabrics.css';

const seasonalFabrics = {
  spring: [
    { name: 'Cotton Lawn', image: '/images/seasons/spring/polka-dot-dress.jpg' },
    { name: 'Light Linen', image: '/images/seasons/spring/polka-dot-dress.jpg' },
    { name: 'Floral Cotton', image: '/images/seasons/spring/polka-dot-dress.jpg' }
  ],
  summer: [
    { name: 'Cotton Voile', image: '/images/seasons/summer/cotton-voile.jpg' },
    { name: 'Silk Chiffon', image: '/images/seasons/summer/silk-chiffon.jpg' },
    { name: 'Bamboo Cotton', image: '/images/seasons/summer/bamboo-cotton.jpg' }
  ],
  fall: [
    { name: 'Wool Blend', image: '/images/seasons/fall/wool-blend.jpg' },
    { name: 'Tweed', image: '/images/seasons/fall/tweed.jpg' },
    { name: 'Corduroy', image: '/images/seasons/fall/corduroy.jpg' }
  ],
  winter: [
    { name: 'Wool Cashmere', image: '/images/seasons/winter/wool-cashmere.jpg' },
    { name: 'Velvet', image: '/images/seasons/winter/velvet.jpg' },
    { name: 'Flannel', image: '/images/seasons/winter/flannel.jpg' }
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
      
      <div className="seasons-grid">
        {seasons.map((season) => (
          <div key={season} className="season-section">
            <h2 className="season-title">{t(`seasons.favorites.${season}.name`)}</h2>
            <div className="fabrics-grid">
              {seasonalFabrics[season].map((fabric, index) => (
                <div key={index} className="fabric-card">
                  <div className="fabric-image">
                    <img 
                      src={fabric.image}
                      alt={t(`seasons.favorites.${season}.fabrics.${fabric.name.toLowerCase()}.name`)} 
                    />
                  </div>
                  <div className="fabric-content">
                    <h3>{t(`seasons.favorites.${season}.fabrics.${fabric.name.toLowerCase()}.name`)}</h3>
                    <p>{t(`seasons.favorites.${season}.fabrics.${fabric.name.toLowerCase()}.description`)}</p>
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