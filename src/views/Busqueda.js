import { useState, useEffect } from "react";
import PeliculasSection from "../components/PeliculasSection";

import Box from "@material-ui/core/Box";

const Busqueda = () => {
  const [valorDelInput, setValorDelInput] = useState(""); //UNdefined
  const [busqueda, setBusqueda] = useState("");
  const [peliculaBuscada, setPeliculaBuscada] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=c7e318bc4679faa16a6f940e1435e019&languaje=es-ES&query=${valorDelInput}&page=1`
    )
      .then((res) => res.json())
      .then((data) => setPeliculaBuscada(data.results));
  }, [busqueda]);

  console.log(peliculaBuscada);

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };

  console.log(busqueda);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBusqueda(valorDelInput);
  };

  return (
    <>
      <Box display="flex" justifyContent="center" bgcolor="background.paper" pt={2}>
        <form onSubmit={handleSubmit}>
          <label>
            Busca tu Pelicula
            <input value={valorDelInput} onChange={handleChange} />
          </label>
        </form>
      </Box>

      <Box pt={2}>
        <PeliculasSection peliculas={peliculaBuscada} />
      </Box>
    </>
  );
};

export default Busqueda;
