import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './translations/en.json';
import hiTranslations from './translations/hi.json';
import teTranslations from './translations/te.json';
import taTranslations from './translations/ta.json';
import knTranslations from './translations/kn.json';
import bnTranslations from './translations/bn.json';  // Add Bengali import

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations
    },
    hi: {
      translation: hiTranslations
    },
    te: {
      translation: teTranslations
    },
    ta: {
      translation: taTranslations
    },
    kn: {
      translation: knTranslations
    },
    bn: {                          // Add Bengali resource
      translation: bnTranslations
    }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
