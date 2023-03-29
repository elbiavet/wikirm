//importamos nuestro componente FilterBTN
import {FilterBTN} from "./FilterBTN";

export const Species = ({ setSpecies, setPageNumber }) => {

    //creamos un array con las posibles especies del personaje
    let species = ["Poopybutthole", "Mythological", "Unknown", "Animal", "Disease","Robot","Cronenberg","Planet"];

return (
<div className="accordion-item ">
  
    <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Especie</button>
    </h2>
    
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body d-flex flex-wrap gap-3">
            
            {/* usamos el metodo .map para crear un componente FilterBTN por cada elemento de nuestro array */}
            {species.map((item, index) => {
                return (
                    <FilterBTN
                        name="species" 
                        index={index} 
                        key={index}
                        setPageNumber={setPageNumber}
                        task={setSpecies} 
                        input={item}
                    />
                );
            })}
        </div>
    </div>
</div>
)}