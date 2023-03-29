import React, { useEffect, useState } from "react";
import {Card} from "../components/Card";
import {InputGroup} from "../components/InputGroup";

export const Location = () => {
  let [ results, setResults ] = useState([]);
  let [ info, setInfo ] = useState([]);
  let { dimension, type, name } = info;
  let [id, setID] = useState(1);

  let url = `https://rickandmortyapi.com/api/location/${ id }`;


useEffect(() => {
  (async function () {
    let data = await fetch(url).then(res => res.json());
    setInfo(data);

    let arrayResults = await Promise.all(
      data.residents.map(u => {
        return fetch(u).then(res => res.json());
      })
    );
    setResults(arrayResults);
  })();
}, [ url ]);



return (
  <div className="container">
    <div className="row mb-3">
      <h1 className="text-center m-2">
        Localización :{" "}
        <span className="text-primary">{name === "" ? "Unknown" : name}</span>
      </h1>
      <h5 className="text-center m-2">
        Dimensión: {dimension === "" ? "Unknown" : dimension}
      </h5>
    </div>
    <div className="row">
      <div className="col-lg-3 col-12 mb-4">
        <h4 className="text-center mb-4">Elige la localización</h4>
        <InputGroup name="Location" setID={ setID } total={126} />
      </div>
      <div className="col-lg-8 col-12">
        <div className="row">
          <Card page="/location/" results={results} />
        </div>
      </div>
    </div>
  </div>
  );
};


