import { useState, useEffect } from "react";
import PeliculasSection from "../components/PeliculasSection";

import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Busqueda = () => {
  const classes = useStyles();

  const [valorDelInput, setValorDelInput] = useState("undefined");
  const [busqueda, setBusqueda] = useState("");
  const [peliculaBuscada, setPeliculaBuscada] = useState([]);
  const [page, setPage] = useState(1);
  const [paginado, setPaginado] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=c7e318bc4679faa16a6f940e1435e019&language=es-ES&query=${valorDelInput}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPeliculaBuscada(data.results);
        setPaginado(data.total_pages);
      });
  }, [busqueda, page]);

  const handleChangeValue = (e) => {
    setValorDelInput(e.target.value);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  console.log(busqueda);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBusqueda(valorDelInput);
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        bgcolor="background.paper"
        pt={2}
      >
        <form onSubmit={handleSubmit}>
          <label>
            Busca tu Pelicula :
            <input value={valorDelInput} onChange={handleChangeValue} />
          </label>
        </form>
      </Box>

      <Box pt={2}>
        <PeliculasSection peliculas={peliculaBuscada} />
      </Box>

      <Box
        m={4}
        display="flex"
        justifyContent="center"
        className={classes.root}
      >
        <Typography>Page: {page}</Typography>
        <Pagination count={paginado} page={page} onChange={handleChange} />
      </Box>
    </>
  );
};

export default Busqueda;
