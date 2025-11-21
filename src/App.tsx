import Navbar from './nav/nav'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home'
import AboutUs from './pages/aboutus'
import ContactUs from './pages/contactus'
import News from './pages/news'
import DownloadApp from './pages/download'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/download" element={<DownloadApp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
