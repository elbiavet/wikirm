import rm2 from '../images/rm2.png'
import tv from '../images/tv.svg'
import world from '../images/world.svg'
import morty from '../images/morty2.svg'
import { Link } from 'react-router-dom';

export const Home = () =>{

    return (
      <div className="container-fluid">

        <div className="row d-flex justify-content-center align-items-center mt-4">
            <div className="d-none d-sm-inline col-12 col-sm-6 col-lg-6 col-xl-4">
                <img src={ rm2 } alt="Portada Rick & Morty" className="" width={430}/>
            </div>
            <div className="col-10 d-sm-none">
                <img src={ rm2 } alt="Portada Rick & Morty" className="" width={250}/>
            </div>

            <div className="col-lg-5">

                <div className="fs-1 text-center ">
                    <p>Bienvenid@ a la Wiki de</p>
                    <p className="text-primary">Rick & Morty</p>
                </div>
                
                <div className="row">
                    <div className="col m-1 border border-2 border-secondary rounded text-center p-2 iconoBoton ">
                        <Link to="/characters" className="text-decoration-none">
                            <img src={ morty } alt="Icono Personajes" width={60}/>
                            <p className="m-0">Personajes</p>
                        </Link>
                    </div>
                    <div className="col m-1 border border-2 border-secondary rounded text-center p-2 iconoBoton">
                        <Link to="/episodes" className="text-decoration-none" >
                            <img src={ tv } alt="Icono Episodios" width={60}/>
                            <p className="m-0 ">Episodios</p>
                        </Link>
                    </div>
                    <div className="col m-1 border border-2 border-secondary rounded text-center p-2 iconoBoton">
                        <Link to="/location" className="text-decoration-none ">
                            <img src={ world } alt="Icono Localización" width={60} className="p-1"/>
                            <p className="m-0">Localizacion</p>
                        </Link>
                    </div>
                </div>

            </div>
            
        </div>
       
    </div>
    );
  };

  
  

    

  