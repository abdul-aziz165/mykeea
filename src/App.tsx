import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminProvider } from './contexts/AdminContext';
import { DataProvider } from './contexts/DataContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import News from './pages/News';
import NewsPost from './pages/NewsPost';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import './App.css';

function App() {
  return (
    <Router>
      <DataProvider>
        <AdminProvider>
          <div className="min-h-screen bg-white">
            <Navbar />
            <main className="pt-16 md:pt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/events" element={<Events />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:slug" element={<NewsPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin/*" element={<Admin />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </AdminProvider>
      </DataProvider>
    </Router>
  );
}

export default App;