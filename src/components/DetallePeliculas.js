import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import DetalleHeader from "../views/DetalleHeader";
import DetalleMedia from "../views/DetalleMedia";
import DetalleInfo from "../views/DetalleInfo";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1440,
    width: "100%",
  },
  img: {
    width: "100%",
  },
}));

const DetallePeliculas = () => {
  const classes = useStyles();

  const params = useParams();

  const { detalle } = useFetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=a12832899a108764636dd1cf66bbae2d&language=es-ES`
  );
 
  return (
    <>
      <DetalleHeader detalle={detalle.backdrop_path} />
      <Container>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} sm={6}>
            <DetalleMedia detalle={detalle.poster_path} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DetalleInfo detalle={detalle} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DetallePeliculas;

// marcas
//npm i @fortawesome/free-brands-svg-icons
