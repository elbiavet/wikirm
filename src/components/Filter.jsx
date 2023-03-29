
import { Gender } from "./Gender";
import { Species } from "./Species";
import { Status } from "./Status";

export const Filter = ({ pageNumber, status, setStatus, setGender, setSpecies, setPageNumber }) => {
  
  let clear = () => {
    setStatus("");
    setGender("");
    setSpecies("");
    setPageNumber(1);
    window.location.reload(false);
  };

  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="fw-bold fs-4 mb-2">Filtros</div>
        <button className="btn btn-outline-primary mb-3" onClick={clear} >   
          Limpiar filtros 
        </button>
      
        <div className="accordion" id="accordionExample">
          <Status
            setPageNumber={ setPageNumber }
            setStatus={ setStatus }
          />
          <Species 
            setPageNumber={ setPageNumber }
            setSpecies={ setSpecies }
          />
          <Gender 
            setPageNumber={ setPageNumber }
            setGender={ setGender }
          />
          
        </div>
    </div>
    );
    };

