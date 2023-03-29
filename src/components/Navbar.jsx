import { NavLink, Link } from "react-router-dom";
import "../App.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">

        <Link to="/" className="navbar-brand fs-3">
          <span className="text-primary">Wiki</span> Rick & Morty 
        </Link>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup" >
          <div className="navbar-nav fs-5">
            <NavLink to="/characters" className={({isActive}) => `nav-link ${isActive ? "active" : "" }`} >Personajes</NavLink>
            <NavLink to="/episodes" className={({isActive}) => `d-none d-sm-block nav-link ${isActive ? "active" : "" }`} >Episodios</NavLink>
            <NavLink to="/location" className={({isActive}) => `d-none d-sm-block nav-link ${isActive ? "active" : "" }`}  >Localización</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
