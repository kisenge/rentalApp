import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Dashboard from './components/pages/Dashboard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={'/'} element={<Dashboard />} />
        <Route exact path={'/registration'} element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
