import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1440,
    width: "100%",
  },
  img: {
    width: "100%",
  },
}));

const DetalleMedia = ({ detalle }) => {
  const classes = useStyles();
  return (
    <>
      <Box pt={2}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${detalle.poster_path}`}
          className={classes.img} alt="imagen poster pelicula"
        />
      </Box>
      
    </>
  );
};

export default DetalleMedia;
