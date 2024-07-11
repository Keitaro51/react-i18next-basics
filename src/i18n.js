import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

import translationEn from './locales/en.json'
import translationFr from './locales/fr.json'

const resources = {
  en: {
    translation: translationEn,
  },
  fr: {
    translation: translationFr,
  },
}

i18n.use(initReactI18next).init({
  debug: true,
  lng: 'en',
  fallbackLng: 'fr',
  resources,
  interpolation: {
    escapeValue: false, //check this feature to avoid security issues
  },
})

export default i18n
