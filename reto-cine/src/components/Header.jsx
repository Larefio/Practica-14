function Header() {
  return (
    <header className="mi-cabecera">
      <img 
        src="https://www.cinecalidad.am/wp-content/themes/Cinecalidad/assets/img/logo.svg?v=1aaaaaa.0" 
        alt="Logo Cine" 
        width="150"
      />
      <div className="buscador-contenedor">
        <input type="text" placeholder="Buscar Película" />
        <button>Buscar</button>
      </div>
    </header>
  );
}

export default Header;