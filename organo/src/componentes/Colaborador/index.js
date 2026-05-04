import "./Colaborador.css";

const Colaborador = ({nome,cargo,imagem, corDeFundoCard}) => {
  return (
    <div className="colaborador">
        {/* https://github.com/Ana-Beatriz12.png */}
      <div className="cabecalho" style={{backgroundColor:corDeFundoCard}}>
        <img src={imagem} alt="" />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>

  )
};
export default Colaborador;
