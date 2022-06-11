import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/index.css';
import App from './App';
import CadastroAnalise from './pages/CadastroAnalise';

export default function AppIndex(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<CadastroAnalise />}></Route>
        <Route index element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      //<React.StrictMode>
        <AppIndex/>
      //</React.StrictMode>
    );