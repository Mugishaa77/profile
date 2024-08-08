import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

// pages
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contact';

// projects
import Atlas from './projects/Atlas';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <Navbar />

      <Routes>
        {/* Pages */}
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element = {<About />} />
        <Route path="/projects" exact element = {<Projects/>} />
        <Route path="/contact" exact element = {<Contacts/>}/>

        {/* Projects */}
        <Route path="/atlas" exact element= {<Atlas/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
