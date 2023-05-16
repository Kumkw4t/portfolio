import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './index.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Works from './pages/Works';
import Resume from './pages/Resume';
import About from './pages/About';
import Header from './components/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Header />
    <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<Works />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </main>
    </Router>
  </React.StrictMode>
);

