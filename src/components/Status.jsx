
import { FilterBTN } from "./FilterBTN";

export const Status = ({ setStatus, setPageNumber }) => {

  //array con los posibles estados del personaje
  let status = ["Alive", "Dead", "Unknown"];

  return (
    <div className="accordion-item">
      
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Estado </button>
      </h2>
      
      <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body d-flex flex-wrap gap-3">
        
          {/* usamos .map para crear un componente FilterBTN por cada elemento del array */}

          {status.map((item, index) => (
            <FilterBTN
              key={ index }
              index={ index }
              name="status"
              task={ setStatus }
              setPageNumber={ setPageNumber }
              input={ item }
            />
          ))}

        </div>
      </div>
    </div>
  );
};