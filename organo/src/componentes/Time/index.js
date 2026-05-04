import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (propriedades) => {
  // nesse caso as nossas propriedades css, elas sao convertidas de js para jsx, por conta disso que o border-color vira borderColor
  const cssSecundaria = { backgroundColor: propriedades.corSecundaria };
  return (
    (propriedades.colaboradores.length > 0) ?
    <section className="time" style={cssSecundaria}>
      <h3 style={{ borderColor: propriedades.corPrimaria }}>{propriedades.nome}</h3>
      <div className="colaboradores">
        {propriedades.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
      </div>
    </section> 
    : ''// aqui usamos o operador ternario para verificar se colaboradores for maior que 0 , retorna o card, se nao ele esconde os times que nao tem colaboradores 
  );
};

export default Time;
