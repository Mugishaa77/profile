import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// pages
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contact';

// projects
import Atlas from './projects/Atlas';
import Evergreen from './projects/Evergreen';
import Darasani from './projects/Darasani';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar toggleTheme={toggleTheme} theme={theme} />

        <Routes>
          {/* Pages */}
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/contact" exact element={<Contacts />} />

          {/* Projects */}
          <Route path="/atlas" exact element={<Atlas />} />
          <Route path="/evergreen" exact element={<Evergreen />} />
          <Route path="/darasani" exact element={<Darasani />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
