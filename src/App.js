import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Skills from './Component/Skills';
import Project from './Component/Project';
import { Route,Routes } from 'react-router-dom';
function App() {
  return<>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/skills" element={<Skills/>}/>
    <Route path="/project" element={<Project/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
  </>
}

export default App;
