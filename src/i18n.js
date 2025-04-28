import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationHY from './locales/hy/translation.json';

const resources = {
  en: { translation: translationEN },
  hy: { translation: translationHY },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'hy', // если вообще ничего не определится
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // Здесь важно! Мы сами указываем порядок поиска языка
      order: ['localStorage', 'querystring', 'cookie', 'navigator', 'htmlTag'],
      caches: ['localStorage'], // чтобы запоминать язык
    },
  });

export default i18n;
