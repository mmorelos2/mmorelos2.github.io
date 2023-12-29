import React from 'react';
import Navbar from './components/navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./views/home";
import Projects from './views/projects';
import About from './views/about';
import { ScrollToTop } from './components/scrollToTop';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
