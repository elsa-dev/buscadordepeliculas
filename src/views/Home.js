import useFetch from "../hooks/useFetch";

import Carusel from "../components/Carusel";
import Container from "@material-ui/core/Container";
import ListaPeliculas from "../components/ListaPeliculas";

import Grid from "@material-ui/core/Grid";

import {
  URL_PELICULAS_POPULARES,
  URL_PELICULAS_PUNTUADAS,
} from "../utils/variables";

const Home = () => {
  const peliculasPopulares = useFetch(URL_PELICULAS_POPULARES);

  const peliculasPuntuadas = useFetch(URL_PELICULAS_PUNTUADAS);

  return (
    <Grid container direction="column">
      {/* <Grid item>
        <Carusel></Carusel>
      </Grid> */}

     <Container >
        <Grid item container direction="row" spacing={2} >
          <Grid item xs={12} sm={6}>
            {/* <ListaPeliculas
              peliculas={peliculasPopulares}
              titulo="Peliculas Populares"
            /> */}
          </Grid>

          <Grid item xs={12} sm={6}>
            {/* <ListaPeliculas
              peliculas={peliculasPuntuadas}
              titulo="Peliculas mejor puntuadas "
            /> */}
          </Grid>
        </Grid>
      </Container>
    </Grid> 
  );
};

export default Home;


// <Container maxWidth="md">
//<Grid item container direction="row" spacing={2}>