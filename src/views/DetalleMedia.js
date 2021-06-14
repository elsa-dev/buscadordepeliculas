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

const DetalleMedia = ({ detalle }) => {
  const classes = useStyles();
  return (
    <>
      <Box
      bgcolor="#303030"
          color="primary.contrastText"
          display="flex" justifyContent="center" alignItems="center" 
          height="100%">

        { detalle ? 
        <img
          src={`https://image.tmdb.org/t/p/w500/${detalle}`}
          className={classes.img} alt="imagen poster pelicula"
        />
        :<Typography className={classes.textCenter} p={10} >
            IMAGEN NO DISPONIBLE
          </Typography> }
      </Box>
      
    </>
  );
};

export default DetalleMedia;
