import Card from './Card';

function Main(props) {
  return (
    <main className="contenedor-peliculas">
      {props.listaPeliculas.map(function(pelicula) {
        return (
          <Card key={pelicula.id} datos={pelicula} />
        )
      })}
    </main>
  );
}

export default Main;