
export const FilterBTN = ({ input, task, setPageNumber, index, name  }) => {
    return (
        <div>
            <div className="form-check">
                <input className="form-check-input d-none" type="radio"
                    name={ name } id={`${ name }-${ index }` }
                />
                <label className="form-check-label btn btn-outline-success"
                    htmlFor={ `${ name }-${ index }` }
                    onClick={ x => {  task( input ); setPageNumber(1);  } }
                > 
                { input } </label>
            </div>
        </div>
    );
 };