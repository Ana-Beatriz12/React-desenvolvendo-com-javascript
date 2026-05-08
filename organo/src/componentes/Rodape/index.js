import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="Rodape">
        <div className="redes-sociais">
          <a href="https://www.linkedin.com/in/ana-beatriz-bento-broetto-27a075279" target="_blank" rel="noopener noreferrer">
            <img src="./imagens/Rodape-img/icons-linkedin.png" alt="Logo linkedin redes sociais" title="Linkedin" />
          </a>
          <a href="https://github.com/Ana-Beatriz12" target="_blank" rel="noopener noreferrer">
            <img src="./imagens/Rodape-img/icons-github.png" alt="Logo github redes sociais" title="Github" />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&to=anabeatrizbroetto@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="./imagens/Rodape-img/icons-gmail.png" alt="Logo gmail redes sociais" title="Gmail" />
          </a>
        </div>
        <div className="logo-projeto"><h1>PeopleHub</h1></div>
        <div className="desenvolvedor"><h2>Desenvolvido por Ana Broetto</h2></div>
    </footer>
  );
};
export default Rodape;
