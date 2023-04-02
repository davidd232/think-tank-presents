import './App.css';
import { Routes, Route } from "react-router-dom";
import { Login } from './components/Login/Login';
import { Main } from './components/Main/Main';
import { SignUp } from './components/Signup/Signup';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  );
}

export default App;
