import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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

if (!i18n.isInitialized) {
  i18n
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
      lng: 'en',
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    });
}

// Always reset to English on module evaluation so the first client render
// matches the server-rendered HTML (which is always English).
// The user's saved language is restored in Providers.tsx after hydration.
if (typeof window !== 'undefined' && i18n.language !== 'en') {
  i18n.changeLanguage('en');
}

export default i18n;
