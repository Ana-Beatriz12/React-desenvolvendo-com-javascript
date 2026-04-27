import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";

// PARA USAR OS SERVIDOR DO REACT, ENTRAMOS NA PASTA organo NO TERMINAL DO VS CODE E DEPOIS RODAMOS O COMANDO npm start PARA INICIAR OS SERVIDOR.

const App = () => {
  return (
    <div className="campo-texto">
      <Banner />
      <Formulario />
    </div>
  );
};

export default App;
