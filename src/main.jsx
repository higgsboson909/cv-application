import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bulma/css/bulma.min.css'
import './styles/global.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
