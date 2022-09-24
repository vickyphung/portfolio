import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';



function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />

        </Routes>
  
    </div>
  );
}

export default App;
