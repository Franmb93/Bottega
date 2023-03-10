import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ChatWrapper from './chat/ChatWrapper';
import Home from './Home';
import Login from './login/Login';

function App() {
  return (
    <BrowserRouter basename='/'>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home></Home>} />
      <Route path="/application" element={<ChatWrapper/>}/>
    </Routes>
  </BrowserRouter>
  );
}
export default App;
