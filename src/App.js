import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainNavbar from './components/MainNavbar';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
