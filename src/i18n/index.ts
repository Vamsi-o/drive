import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ar from './locales/ar.json';
import ru from './locales/ru.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import es from './locales/es.json';
import el from './locales/el.json';
import fil from './locales/fil.json';
import zh from './locales/zh.json';

export const languages = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية', dir: 'rtl' },
  { code: 'ru', label: 'Русский' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'es', label: 'Español' },
  { code: 'el', label: 'Ελληνικά' },
  { code: 'fil', label: 'Filipino' },
  { code: 'zh', label: 'Chinese' },
];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
      ru: { translation: ru },
      fr: { translation: fr },
      de: { translation: de },
      es: { translation: es },
      el: { translation: el },
      fil: { translation: fil },
      zh: { translation: zh },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
