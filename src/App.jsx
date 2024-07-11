import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './i18n'
import {useTranslation, Trans} from 'react-i18next'

function App() {
  const [count, setCount] = useState(0)
  const {t, i18n} = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <div className="language-selector">
        <button onClick={() => changeLanguage('en-US')}>English (US)</button>

        <button onClick={() => changeLanguage('fr-FR')}>Français (FR)</button>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {t('counting') + count}
        </button>
        <p>
          <Trans i18nKey="testHMR">
            <code>{{url: 'src/App.jsx'}}</code>
          </Trans>
        </p>
      </div>
      <p className="read-the-docs">{t('viteReact')}</p>
      <p>{t('differentMeanings')}</p>
      <p>{t('direction.right')}</p>
      <p>{t('correct.right')}</p>
    </>
  )
}

export default App
