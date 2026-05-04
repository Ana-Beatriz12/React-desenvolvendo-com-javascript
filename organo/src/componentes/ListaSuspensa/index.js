import "./listaSuspensa.css";

// o map ele percorre a lista , modifica ela,criando uma nova array com esse itensa transformados e retorna ela modificada!
const ListaSuspensa = (propriedades) => {
  return (
    <div className="lista-suspensa">
      <label>{propriedades.label}</label>
      <select onChange={evento => propriedades.aoAlterado(evento.target.value)} required={propriedades.required} value={propriedades.valor} id={propriedades.id} translate="no">
        <option value="">Escolha o Time:</option>
        {propriedades.itens.map((item) => (
          <option key={item} translate="no" >{item}</option>
        ))}
      </select>
    </div>
  );
};
export default ListaSuspensa;
