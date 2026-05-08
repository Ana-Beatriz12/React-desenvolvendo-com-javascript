// IMPORTANDO O ARQUIVO CSS PARA ESTILIZAR O BANNER
import React, { Component } from "react";
import "./Banner.css";
import myVideo from "../../videos/fundo-home2.mp4";

const Banner = () => {
  return (
    <header className="banner">
      <video className="back-video" src={myVideo} autoPlay muted loop></video>
      <div className="container-principal">
        <div className="titulo-home">
          <h1>PeopleHub</h1>
          <p>Pessoas e equipes, organizados em um só lugar!</p>
        </div>
        <div className="image-home">
          <img src="./imagens/img-equipe-home.png" alt="" />
        </div>
      </div>
    </header>
  );
};
export default Banner; // exporta a função para ser usada em outros lugares, arquivos.
