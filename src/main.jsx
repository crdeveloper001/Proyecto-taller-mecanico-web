import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RoutesConfig } from './Routes/RoutesConfig.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RoutesConfig />
  </React.StrictMode>,
)
