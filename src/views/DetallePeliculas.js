import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

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

  const [detalle, setDetalle] = useState({});
  const [video, setVideo] = useState({});

  const params = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=a12832899a108764636dd1cf66bbae2d&languaje=es-ES`
    )
      .then((res) => res.json())
      .then((data) => setDetalle(data));

    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=a12832899a108764636dd1cf66bbae2d&languaje=es-ES`
    )
      .then((res) => res.json())
      .then((data) => setVideo(data));
  }, []);

  console.log(detalle);

  return (
    <>
      <Box display="flex" justifyContent="center" bgcolor="background.paper">
        <img
          src={`https://image.tmdb.org/t/p/original/${detalle.backdrop_path}`}
          alt="poster pelicula"
          className={classes.img}
        />
      </Box>

      <Container >
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box pt={2}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${detalle.poster_path}`}
                className={classes.img}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box pt={2}>
              <Typography variant="h2" gutterBottom>
              {detalle.original_title}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              fecha de estreno:{detalle.release_date}
            </Typography>
            <Typography variant="body1" gutterBottom>{detalle.overview}</Typography>
            <Typography variant="h6">
              Duracion: {detalle.runtime}  min
              </Typography>
            <Typography variant="h6">
              Generos:
              {detalle.genres &&
                detalle.genres.map((genre) => (
                  <Typography>{genre.name}</Typography>
                ))}
            </Typography>
            <Typography variant="h6">
              Presupuesto: ${detalle.budget}
              </Typography>
              <Typography variant="h6">
              Recaudacion: ${detalle.revenue}
              </Typography>
              <Typography variant="h6">
              Propduccion: 
              {detalle.production_companies &&
                detalle.production_companies.map((production) => (
                  <Typography>{production.name}</Typography>
                ))}
              </Typography>
            </Box>
            
          </Grid>
        </Grid>
      </Container>

      

      <div>
        {video.results &&
          video.results.map((video) => (
            <iframe src={`https://www.youtube.com/embed/${video.key}`} />
          ))}
      </div>
    </>
  );
};

export default DetallePeliculas;

// marcas
//npm i @fortawesome/free-brands-svg-icons
