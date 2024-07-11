import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import translationEn from './locales/en.json'
import translationFr from './locales/fr.json'

const resources = {
  'en-US': {
    translation: translationEn,
  },
  'fr-FR': {
    translation: translationFr,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'fr-FR',
    resources,
    interpolation: {
      //include variable inside translation (see testHMR in translation files)
      escapeValue: false, //don't escape special characters, for eg. by html interpolation. Use carefully to avoid XSS issues
    },
  })

export default i18n
