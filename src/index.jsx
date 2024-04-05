import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Router from './Router'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router />
    <Footer />
  </React.StrictMode>
)
