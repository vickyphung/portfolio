import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Background from './components/Background';


function App() {
  return (
    <div className="App">
        {/* <Navigation /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spaceground" element={<Background />} />
 
        </Routes>
    
    </div>
  );
}

export default App;
