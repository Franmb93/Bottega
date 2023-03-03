import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './login/Login';

function App() {
  return (
    <BrowserRouter basename='/'>
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
