// importar bootstrap y React
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

//importar react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Episodes, Location, Characters, Home } from "./pages";

// importar archivos css y otros JSX
import { Navbar, CardDetails} from "./components";
import './App.css';


// componente funcional para el enrutamiento
export const AppRouter = ()=> {
  return(
      <BrowserRouter > 
        <div className="App">
          <Navbar />
        </div>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/location" element={<Location />} />

            <Route path="/characters/:id" element={<CardDetails />} />
            <Route path="/episodes/:id" element={<CardDetails />} />
            <Route path="/location/:id" element={<CardDetails />} />
        </Routes>

    </BrowserRouter>
  )
}


