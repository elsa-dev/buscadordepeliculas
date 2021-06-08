import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import DetalleHeader from "../views/DetalleHeader";
import DetalleMedia from "../views/DetalleMedia";
import DetalleInfoTexto from "../views/DetalleInfoTexto";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

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
  // const [video, setVideo] = useState({});

  const params = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=a12832899a108764636dd1cf66bbae2d&languaje=es-ES`
    )
      .then((res) => res.json())
      .then((data) => setDetalle(data));

    // fetch(
    //   `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=a12832899a108764636dd1cf66bbae2d&languaje=es-ES`
    // )
    //   .then((res) => res.json())
    //   .then((data) => setVideo(data));
  }, []);

  console.log(detalle);

  return (
    <>
      <DetalleHeader detalle={detalle} />
      <Container>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} sm={6}>
            <DetalleMedia detalle={detalle} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DetalleInfoTexto detalle={detalle} />
          </Grid>
        </Grid>
      </Container>

      {/* <div>
        {video.results &&
          video.results.map((video) => (
            <iframe src={`https://www.youtube.com/embed/${video.key}`} />
          ))}
      </div> */}
    </>
  );
};

export default DetallePeliculas;

// marcas
//npm i @fortawesome/free-brands-svg-icons
