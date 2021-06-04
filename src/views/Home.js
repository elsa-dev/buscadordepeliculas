import useFetch from "../hooks/useFetch";

import Carusel from "../components/Carusel";
import ListaPeliculas from "../components/ListaPeliculas";

import { Grid } from '@material-ui/core';

import {
  URL_PELICULAS_POPULARES,
  URL_PELICULAS_PUNTUADAS,
} from "../utils/variables";



const Home = () => {
  const peliculasPopulares = useFetch(URL_PELICULAS_POPULARES);

  const peliculasPuntuadas = useFetch(URL_PELICULAS_PUNTUADAS);

  return (
    <Grid container direction="column">
      <Grid item>
        <Carusel></Carusel>
      </Grid>

      <Grid itema container direction="row">
          <Grid item>
              <ListaPeliculas
          peliculas={peliculasPopulares}
          titulo="Peliculas Populares"
        />
          </Grid>
        
        <Grid item>
            <ListaPeliculas
          peliculas={peliculasPuntuadas}
          titulo="Peliculas mejor puntuadas "
        />
        </Grid>
        
      </Grid>
    </Grid>
  );
};

export default Home;
