
import { useEffect, useState} from "react";
import { Card, Filter, Pagination, Search } from "../components";


export const Characters = () => {

      // estado de busqueda y pagina
  let [pageNumber, setPageNumber] = useState(1); //numero de página
  let [search, setSearch] = useState(""); // busqueda

  // para los filtros
  let [status, setStatus] = useState(""); // estado (vivo,muerto,desconocido)
  let [gender, setGender] = useState(""); // genero
  let [species, setSpecies] = useState(""); // especies

  // almacenar los datos recibidos de la API
  let [fetchData, setFetchData] = useState([]);
  let { info, results } = fetchData; 


  let url =`https://rickandmortyapi.com/api/character/?page=${ pageNumber }&name=${ search }&status=${ status }&gender=${ gender }&species=${ species }`;
  

  // useEffect para llamar a la API y guardar el resultado en fetchData cuando cambie la "url".
    useEffect(() => {
      ( async function(){
        let data = await fetch(url).then(res => res.json());
        setFetchData(data);
      })();
    }, [url]);
    
  
  
  return (
        <div className="container">
          
          <h1 className="text-center m-0">Personajes</h1>
          
          <Search setSearch={ setSearch } setPageNumber={ setPageNumber } />
          
          <div className="container">
            <div className="row">
            
            <Filter
                pageNumber={ pageNumber }
                setPageNumber={ setPageNumber }
                status={ status }
      
                setStatus={ setStatus }
                setSpecies={ setSpecies }
                setGender={ setGender }
            />
    
            <div className="col-lg-8 col-12">
              <div className="row">
    
                <Card page="/characters/" results={  results  } />
              </div>
            </div>
          </div>
        </div>

        <Pagination
            info={ info }
            pageNumber={ pageNumber }
            setPageNumber={ setPageNumber }
        />
      </div>
  )
 }
