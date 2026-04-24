import Banner from "./componentes/Banner";
import CampoTexto from "./componentes/CampoTexto";

// PARA USAR OS SERVIDOR DO REACT, ENTRAMOS NA PASTA organo NO TERMINAL DO VS CODE E DEPOIS RODAMOS O COMANDO npm start PARA INICIAR OS SERVIDOR.

const App = () => {
  return (
    <div className="campo-texto">
      <Banner />
      <CampoTexto label="Nome" placeholder="Digite seu Nome: " />
      <CampoTexto label="Cargo" placeholder="Digite seu Cargo: " />
      <CampoTexto label="Imagem" placeholder="Digite o endereço da Imagem: " />
    </div>
  );
};

export default App;
