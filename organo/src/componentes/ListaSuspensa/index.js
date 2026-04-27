import "./listaSuspensa.css";

// o map ele percorre a lista , modifica ela,criando uma nova array com esse itensa transformados e retorna ela modificada!
const ListaSuspensa = (propriedades) => {
  return (
    <div className="lista-suspensa">
      <label>{propriedades.label}</label>
      <select onChange={evento => propriedades.aoAlterado(evento.target.value)} required={propriedades.required} value={propriedades.value} id="">
        {propriedades.itens.map((item) => (
          <option key={item} >{item}</option>
        ))}
      </select>
    </div>
  );
};
export default ListaSuspensa;
