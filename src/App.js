import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Index from './pages/Index';
import PrijavaIspita from './pages/PrijavaIspita';
import PolozeniIspiti from './pages/PolozeniIspiti';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/index" element={<Index />} />
          <Route path="/prijava/:broj_indeksa" element={<PrijavaIspita />} />
          <Route path="/polozeni/:broj_indeksa" element={<PolozeniIspiti />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
