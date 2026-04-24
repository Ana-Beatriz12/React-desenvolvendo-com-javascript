// IMPORTANDO O ARQUIVO CSS PARA ESTILIZAR O BANNER
import "./Banner.css";

const Banner = () => {
  return (
    <header className="banner">
      <img src="./imagens/banner.png" alt="o banner principal da pagina do organo!"/>
    </header>
  );
}
export default Banner; // exporta a função para ser usada em outros lugares, arquivos.
