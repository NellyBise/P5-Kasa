import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Home from './pages/Home/Home'
import Error from './pages/Error/Error'
import APropos from './pages/APropos/APropos'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/APropos" element={<APropos />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
