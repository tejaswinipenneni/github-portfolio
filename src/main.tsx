import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'  // or HashRouter
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* Option 1: BrowserRouter with basename */}
    <BrowserRouter basename="/github-portfolio">
      <App />
    </BrowserRouter>

    {/* OR Option 2: HashRouter (if you want to avoid refresh 404s) */}
    {/*
    <HashRouter>
      <App />
    </HashRouter>
    */}
  </React.StrictMode>
)
