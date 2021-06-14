import React from "react";

import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import DetalleInfoTexto from "./DetalleInfoTexto";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

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

const DetalleInfo = ({ detalle }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const params = useParams();

  const { video } = useFetch(
    `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=a12832899a108764636dd1cf66bbae2d&languaje=es-ES`
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box p={4} display="flex" justifyContent="center">
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          ver trailer
        </Button>
      </Box>

      <DetalleInfoTexto 
      detalle={detalle}
      detalleReleaseDate={detalle.release_date}
      detalleRevenue={detalle.revenue}
      detalleBudget={detalle.budget} />

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

export default DetalleInfo;
