function Card(props) {
  return (
    <div className="tarjeta">
      <img src={props.datos.img} alt={props.datos.titulo} />
      <div className="info-oculta">
        <h3>{props.datos.titulo}</h3>
        <p>Género: {props.datos.genero}</p>
        <p>Descripción: {props.datos.descripcion}</p>
      </div>
    </div>
  );
}

export default Card;