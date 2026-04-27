import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// PARA USAR OS SERVIDOR DO REACT, ENTRAMOS NA PASTA organo NO TERMINAL DO VS CODE E DEPOIS RODAMOS O COMANDO npm start PARA INICIAR OS SERVIDOR.

const root = ReactDOM.createRoot(document.getElementById('root'));// o createRoot é onde criamos o componente principal da aplicação!
root.render(
  //esse React.StrictMode demontra as mensagens de erro mais amigaveis
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

