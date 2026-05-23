import Header from './components/Header';
import Main from './components/Main';
import { pelis } from './arreglo';
import './estilos.css';

function App() {
  return (
    <div>
      <Header />
      <Main listaPeliculas={pelis} />
    </div>
  );
}

export default App;