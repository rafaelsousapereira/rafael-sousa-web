import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { App } from './app'
import { SpeedInsights } from '@vercel/speed-insights/next'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <SpeedInsights />
  </React.StrictMode>,
)
