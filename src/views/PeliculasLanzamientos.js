import React from "react";

import PeliculasSection from "../components/PeliculasSection";
import useFetch from "../hooks/useFetch";


import { useState} from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const PeliculasLanzamientos = () => {
  const classes = useStyles();

  const [page, setPage] = useState(1);
  

  const { peliculas, paginado } = useFetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=a12832899a108764636dd1cf66bbae2d&language=es-ES&page=${page}`, page)

  

  const handleChange = (event, value) => {
    setPage(value);
  };
  console.log(page);
  console.log(paginado);

  return (
    <>
      <PeliculasSection
        peliculas={peliculas}
        titulo="Ultimos Lanzamientos"
      />

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

export default PeliculasLanzamientos;

