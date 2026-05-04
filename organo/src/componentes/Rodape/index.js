import "./Rodape.css";

const Rodape = () => {
  return (
    <section className="Rodape">
        <div className="redes-sociais">
          <img src="./imagens/Rodape-img/fb.png" alt="Logo facebook redes sociais" title="Facebook" />
          <img src="./imagens/Rodape-img/tw.png" alt="Logo twitter redes sociais" title="Twitter" />
          <img src="./imagens/Rodape-img/ig.png" alt="Logo instagram redes sociais" title="Instagram" />
        </div>
        <div className="logo-projeto"><img src="./imagens/Rodape-img/logo.png" alt="Logo projeto ORGANO" /></div>
        <div className="desenvolvedor"><h2>Desenvolvido por Alura</h2></div>
    </section>
  );
};
export default Rodape;
