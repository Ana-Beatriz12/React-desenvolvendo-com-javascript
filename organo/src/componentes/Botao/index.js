import "./Botao.css";

const Botao = (propriedades) => {// nesse caso estamos usando o children caso queiramos pegar os outros elementos que esta dentro do botao, ex: um icone
  return <button className="botao">{propriedades.children}</button>;
};
export default Botao;
