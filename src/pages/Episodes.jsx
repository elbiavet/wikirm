import React, { useEffect, useState } from "react";
import {Card} from "../components/Card";
import {InputGroup} from "../components/InputGroup";

export const Episodes = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { air_date, episode, name } = info;
  let [id, setID] = useState(1);

let url = `https://rickandmortyapi.com/api/episode/${ id }`;


useEffect(() => {
  (async function () {
    let data = await fetch(url).then(res => res.json());
    setInfo(data);

    let arrayResults = await Promise.all(
      data.characters.map(u => {
        return fetch(u).then(res => res.json());
      })
    );
    setResults(arrayResults);
  })();
}, [ url ]);



return (
  <div className="container">

    <div className="row mb-5">
      <h1 className="text-center m-2">Episodio :{" "} <span className="text-primary">{name === "" ? "Unknown" : name}</span></h1>
      <h5 className="text-center m-2">Fecha de emisión: {air_date === "" ? "Unknown" : new Date(air_date).toLocaleDateString() }</h5>
    </div>

    <div className="row">
      <div className="col-lg-3 col-12 mb-4">
        <h4 className="text-center mb-4">Elige el episodio</h4>
        <InputGroup name="Episode" setID={ setID } total={51} />
      </div>

      <div className="col-lg-8 col-12">
        <div className="row">
          <Card page="/episodes/" results={ results } />
        </div>
      </div>

    </div>
  </div>
  );
};