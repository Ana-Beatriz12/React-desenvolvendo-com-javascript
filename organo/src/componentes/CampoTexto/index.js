import "./CampoTexto.css";// importando o css para estilização

const CampoTexto = (propriedades) => { // o propriedades é as propriedades que estamos recebendo do app.js variavel campoText
  return (
    <div className="teste">
      <label>{propriedades.label}</label>
      <input type="text" placeholder={propriedades.placeholder}/>
    </div>
  ); //o parenteses é so usado no return quando vamos utilizar varia s linhas nesse caso o html !
};
export default CampoTexto;
