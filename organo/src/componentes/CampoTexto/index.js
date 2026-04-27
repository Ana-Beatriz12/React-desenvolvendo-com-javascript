
import "./CampoTexto.css"; // importando o css para estilização

const CampoTexto = (propriedades) => {
  // o propriedades é as propriedades que estamos recebendo do app.js variavel campoText

  //fazendo com que o estado do input, os valores digitados, mude e seja atualizado em tempo real, como useState
  const aoDigitado = (evento) => {
    propriedades.aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{propriedades.label}</label>
      <input
        value={propriedades.valor}
        onChange={aoDigitado}
        required={propriedades.obrigatorio}
        type="text"
        placeholder={propriedades.placeholder}
      />
    </div>
  ); //o parenteses é so usado no return quando vamos utilizar varia s linhas nesse caso o html !
};
export default CampoTexto;
