import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

//https://github.com/alura-cursos/organo/tree/aula-5/src/componentes

// PARA USAR OS SERVIDOR DO REACT, ENTRAMOS NA PASTA organo NO TERMINAL DO VS CODE E DEPOIS RODAMOS O COMANDO npm start PARA INICIAR OS SERVIDOR.

const App = () => {
  const times = [
    {
      id: "Programação",
      nome: "Programação",
      corPrimaria: "#D9F7E9",
      corSecundaria: "#57C278",
    },
    {
      id: "Front-End",
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      id: "Data Science",
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      id: "Devops",
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      id: "UX e Design",
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      id: "Mobile",
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      id: "Inovação e Gestão",
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  // console.log(times);

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log("COLABORADOR ADICIONADO", colaborador);
    setColaboradores([...colaboradores, colaborador])
  };
  return (
    <div className="campo-texto">
      <Banner />
      <Formulario times={times.map(time => time.nome)} // time.nome aqui no nosso form, pegamos a lista de times e fazemos com que ele retorne apenas o nome, formatado em sting.
        aoColaboradorCadastrado={colaborador =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {/* /*para cada time, dentro da lista de times, criamos um componente chamado time , o time é o nome da lista, e depois do . é o nome da nossa variavel de acesso para o valor, que esta na lista*/ }
      {times.map(time  => 
        <Time
          key={time.id}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.id)}//.filter(colaborador => colaborador.time === time.nome)
        />)}
        
    </div>
  );
};

export default App;
