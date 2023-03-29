import styles from "../estilos/Card.module.scss"
import { Link } from "react-router-dom";

export const Card = ({ page, results =[] }) => {
 
  
        return ( 
            <>
                { results?.length === 0 ? 
                    
                    //si no hay resultados
                    <div className="alert alert-primary" role="alert">No hay personajes para mostrar con esos parámetros. </div> 
                    
                    //si hay resultados
                    : ( results?.map( item => {
                        let { id, image, name, status, location } = item;
                        
                        
                        return (
                        <Link
                            to={`${ page }${ id }`}
                            key={ id }
                            className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark text-decoration-none"
                            >
                            <div key={ id }>
                                <div className={`${ styles.card } d-flex flex-column justify-content-center`}>
                                    <img className={`${ styles.img } img-fluid`} src={ image } alt="" />
                                    <div className={`${ styles.content }`}>
                                        <div className="fs-5 fw-bold mb-2 text-primary">{ name.length >15 ? name.slice(0,15) + "...": name }</div>
                                        <div>
                                            <div className="fs-6 fw-normal">Fue visto por última vez en</div>
                                            <div className="fs-6 fw-bold">{ location.name.length >18 ? location.name.slice(0,18) + "...": location.name }</div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    (() => {
                                    if ( status === "Dead" ) { 
                                        return ( <div className={`${styles.badge} position-absolute badge bg-danger`}>{ status }</div>);
                                        } else if (status === "Alive") {
                                            return ( <div className={`${styles.badge} position-absolute badge bg-success`}>{status}</div> );
                                        } else {
                                            return ( <div className={`${styles.badge} position-absolute badge bg-secondary`}>{status}</div>
                                            );
                                        }
                                    })()}
                            </div>
                        </Link>)
                        })
                    )
                    }
                </>
            );
}

