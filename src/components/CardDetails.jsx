import React, { useState, useEffect } from "react";
import { useCallback } from "react";
import { useParams } from "react-router-dom";


export const CardDetails = () => {

    let { id } = useParams();
    let [ fetchData, setFetchData ] = useState([]);
    let { name, location, origin, gender, image, status, species } = fetchData;
    
    let url = `https://rickandmortyapi.com/api/character/${ id }`;
    
    const getImages = useCallback(async()=>{
            let data = await fetch(url).then(res => res.json());
            setFetchData(data);
          }, [ url ]);
    
    useEffect(() => {
        getImages();
      }, [ getImages]);


    return (
        <div className="container w-75 border border-2 border-primary rounded" style={{ "background" : "whitesmoke"}}>
            
            <div className="row d-flex justify-content-evenly align-items-center ">
                
                <img className="col-5 img-fluid m-4" src={ image } alt={ name } />
          
                <div className="col-5">
                    <h1 className="text-primary m-2">{ name }</h1>

                    { status === "Dead" && <div className="badge bg-danger fs-5 mt-3 mb-3">{ status }</div> }
                    { status === "Alive" && <div className=" badge bg-success fs-5 mt-3 mb-3">{ status }</div>}
                    { status === "unknown" &&  <div className="badge bg-secondary fs-5 mt-3 mb-3">{ status }</div>}
                    
                    <div>
                        <p className="fs-5"><span className="fw-bold">Género : </span>{ gender }</p>
                        <p className="fs-5"><span className="fw-bold">Localización: </span>{ location?.name }</p>
                        <p className="fs-5"><span className="fw-bold">Origen: </span>{ origin?.name }</p>
                        <p className="fs-5"><span className="fw-bold">Especie: </span>{ species }</p>
                    </div>
                </div>
            </div>
        </div>
        )
  
 }
