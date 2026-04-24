import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));// o createRoot é onde criamos o componente principal da aplicação!
root.render(
  //esse React.StrictMode demontra as mensagens de erro mais amigaveis
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

