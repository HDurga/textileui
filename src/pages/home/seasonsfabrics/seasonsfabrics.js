import React from 'react';
import { useTranslation } from 'react-i18next';
import './seasonsfabrics.css';

const SeasonsFabrics = () => {
  const { t } = useTranslation();

  const seasonalFabrics = {
    Spring: {
      name: {
        en: "Spring",
        hi: "वसंत",
        te: "వసంత ఋతువు"
      },
      fabrics: [
        {
          name: {
            en: "Cotton Lawn",
            hi: "कॉटन लॉन",
            te: "కాటన్ లాన్"
          },
          description: {
            en: "Lightweight and breathable cotton perfect for spring weather",
            hi: "वसंत के मौसम के लिए हल्का और सांस लेने योग्य कपास",
            te: "వసంత ఋతువు కోసం తేలికైన మరియు గాలి వచ్చే పత్తి"
          },
          image: require("../../../img/cotton.jpg")
        },
        {
          name: {
            en: "Linen Blend",
            hi: "लिनन मिश्रण",
            te: "లినెన్ మిశ్రమం"
          },
          description: {
            en: "Fresh and airy fabric ideal for spring attire",
            hi: "वसंत परिधान के लिए ताज़ा और हवादार कपड़ा",
            te: "వసంత దుస్తుల కోసం తాజా మరియు గాలి వచ్చే వస్త్రం"
          },
          image: require("../../../img/cotton.jpg")
        }
      ]
    },
    Summer: {
      name: {
        en: "Summer",
        hi: "गर्मी",
        te: "వేసవి"
      },
      fabrics: [
        {
          name: {
            en: "Pure Cotton",
            hi: "शुद्ध कपास",
            te: "సుద్ధమైన పత్తి"
          },
          description: {
            en: "Cool and comfortable cotton for hot summer days",
            hi: "गर्म गर्मियों के दिनों के लिए ठंडा और आरामदायक कपास",
            te: "వేసవి రోజులకు చల్లని మరియు సౌకర్యవంతమైన పత్తి"
          },
          image: require("../../../img/cotton.jpg")
        }
      ]
    }
  };

  return (
    <div className="seasons-fabrics-container">
      <div className="seasons-header">
        <h1>
          <span>{t('seasons.favorites.title')}</span>
        </h1>
        <p>{t('seasons.favorites.description')}</p>
      </div>
      
      <div className="seasons-grid">
        {Object.entries(seasonalFabrics).map(([seasonKey, seasonData]) => (
          <div key={seasonKey} className="season-section">
            <h2 className="season-title">
              <div>{seasonData.name.en}</div>
              <div>{seasonData.name.hi}</div>
              <div>{seasonData.name.te}</div>
            </h2>
            <div className="fabrics-grid">
              {seasonData.fabrics.map((fabric, index) => (
                <div key={index} className="fabric-card">
                  <div className="fabric-image">
                    <img src={fabric.image} alt={fabric.name.en} />
                  </div>
                  <div className="fabric-content">
                    <h3>
                      <div>{fabric.name.en}</div>
                      <div>{fabric.name.hi}</div>
                      <div>{fabric.name.te}</div>
                    </h3>
                    <p>
                      <div>{fabric.description.en}</div>
                      <div>{fabric.description.hi}</div>
                      <div>{fabric.description.te}</div>
                    </p>
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