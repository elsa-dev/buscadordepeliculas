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

const DetalleHeader = ({detalle}) => {
    const classes = useStyles();
    return(
        <>
            <Box display="flex" justifyContent="center" bgcolor="background.paper">
        <img
          src={`https://image.tmdb.org/t/p/original/${detalle.backdrop_path}`}
          alt="poster pelicula"
          className={classes.img}
        />
      </Box>

        </>
    )
}

export default DetalleHeader