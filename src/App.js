import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// Import pages and components
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contact';

// Projects
import Atlas from './projects/Atlas';
import Evergreen from './projects/Evergreen';
import Darasani from './projects/Darasani';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme; // Apply the theme class to the body
  }, [theme]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/contact" exact element={<Contacts />} />
          <Route path="/atlas" exact element={<Atlas />} />
          <Route path="/evergreen" exact element={<Evergreen />} />
          <Route path="/darasani" exact element={<Darasani />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
