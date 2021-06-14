import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1440,
    width: "100%",
  },
  img: {
    width: "100%",
  },
}));

const DetalleHeader = ({ detalle }) => {
  const classes = useStyles();
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        bgcolor="#303030"
        color="primary.contrastText"
      >
        {detalle ? (
          <img
            src={`https://image.tmdb.org/t/p/original/${detalle}`}
            alt="poster pelicula"
            className={classes.img}
          />
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default DetalleHeader;
