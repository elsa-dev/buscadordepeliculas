import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";

const useStyles = makeStyles({
  root: {
    height: "500px",
    borderRadius: 16,
  },
  actionArea: {
    borderRadius: 16,
    transition: "0.5s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  imagen: {
    height: "400px",
    overflow: "hidden",
    background: " #303030",
  },
  img: {
    width: "100%",
    // overflow: "hidden",
  },
  textCenter: {
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
  },
});

const Tarjeta = ({ imagen, titulo }) => {
  const classes = useStyles();

  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.root} elevation={3}>
        <Box
          className={classes.imagen}
          bgcolor="#303030"
          color="primary.contrastText"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {imagen ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${imagen}`}
              className={classes.img}
              alt="poster pelicula"
            />
          ) : (
            <Typography className={classes.textCenter}>
              IMAGEN NO DISPONIBLE
            </Typography>
          )}
        </Box>

        <Typography className={classes.textCenter}>{titulo}</Typography>

        <Box display="flex" justifyContent="center">
          <IconButton aria-label="mira el detalle de la pelicula">
            <VisibilityIcon />
          </IconButton>
        </Box>
      </Card>
    </CardActionArea>
  );
};

export default Tarjeta;
