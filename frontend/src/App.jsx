
import './index.css'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Failed from './components/Failed'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/failed" element={<Failed />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App
