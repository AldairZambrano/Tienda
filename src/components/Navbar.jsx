import '../style/Navbar.css'

const Navbar = () => {
  return (
    <nav id="nav" className="navbar navbar-expand-lg bg-body">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#">Fast Food</a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Inicio</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Menu
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#ComidasRapidas">Comidas Rapidas</a></li>
              <li><a className="dropdown-item" href="#jugos">Bebidas</a></li>
              <li><a className="dropdown-item" href="#postres">Postres</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='#'>Contacto</a>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Buscar</button>
        </form> */}
      </div>
    </div>
  </nav>
  )
}

export default Navbar;
