import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

// pages
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element = {<About />} />
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
