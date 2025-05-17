import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './translations/en.json';
import hiTranslations from './translations/hi.json';
import teTranslations from './translations/te.json';
import tamilTranslations from './translations/tamil.json';
import kannadaTranslations from './translations/kannada.json';

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
      translation: tamilTranslations
    },
    kn: {
      translation: kannadaTranslations
    }
  },
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
