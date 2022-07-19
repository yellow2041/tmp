import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Main, Detail} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
