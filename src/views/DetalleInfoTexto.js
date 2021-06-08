import React from "react";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1440,
    width: "100%",
  },
  img: {
    width: "100%",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DetalleInfoTexto = ({ detalle }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [video, setVideo] = useState({});

  const params = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=a12832899a108764636dd1cf66bbae2d&languaje=es-ES`
    )
      .then((res) => res.json())
      .then((data) => setVideo(data));
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box pt={2}>
        <Typography variant="h2" gutterBottom>
          {detalle.original_title}
        </Typography>

        <Typography variant="subtitle2" gutterBottom>
          fecha de estreno:{detalle.release_date}
        </Typography>

        <Box p={4} display="flex" justifyContent="center">
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            ver trailer
          </Button>
        </Box>

        <Typography variant="body1" gutterBottom>
          {detalle.overview}
        </Typography>
        <Typography variant="h6">Duracion: {detalle.runtime} min</Typography>
        <Typography variant="h6">
          Generos:
          {detalle.genres &&
            detalle.genres.map((genre) => (
              <Typography color="primary">{genre.name}</Typography>
            ))}
        </Typography>
        <Typography variant="h6">Presupuesto: ${detalle.budget}</Typography>
        <Typography variant="h6">Recaudacion: ${detalle.revenue}</Typography>
        <Typography variant="h6">
          Propduccion:
          {detalle.production_companies &&
            detalle.production_companies.map((production) => (
              <Typography color="primary">{production.name}</Typography>
            ))}
        </Typography>
      </Box>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <div>
            {video.results &&
              video.results.map((video) => (
                
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.key}`}
                  />
               
              ))}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DetalleInfoTexto;
