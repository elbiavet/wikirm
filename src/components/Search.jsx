import styles from "../estilos/Search.module.scss";


export const Search = ({ setSearch, setPageNumber }) => {

  // que la pagina no se recargue cuando ocurra el evento
  const searchCharacter = (e) => {
    e.preventDefault();
  };

  return (
    <form className="d-flex flex-sm-row align-items-center justify-content-center gap-3 m-3">
        <input
            placeholder="Busca a tu personaje..."
            className={styles.input}
            type="text"
            onChange={(e) => {
              setPageNumber(1);
              setSearch(e.target.value); //cambiamos el estado de search al valor de lo que el usuario escribe
            }}
        />
        <button
          className={`${styles.btn} btn btn-primary fs-5`}
          onClick={ searchCharacter }
        >
        Buscar
        </button>
    </form>
    
  );
};