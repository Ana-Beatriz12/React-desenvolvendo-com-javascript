// IMPORTANDO O ARQUIVO CSS PARA ESTILIZAR O BANNER
import React, {Component} from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <header className="banner">
      <video className="back-video" autoPlay loop muted playsInline controls>
      <source src="/organo/public/videos/fundo-home.mp4"  type="video/mp4"/></video>
      <div className="titulo-home">
        <h1>PeopleHub</h1>
      </div>
    </header>
  );
};
export default Banner; // exporta a função para ser usada em outros lugares, arquivos.
