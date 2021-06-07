import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";

const useStyles = makeStyles({
  root: {
    height: "500px",
  },
  imagen: {
    height: "400px",
    overflow: "hidden",
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

// const useStyles = makeStyles((theme) => ({
// //   root: {
// //     width: "100%",
// //     height: 400,
// //     maxWidth: 300,
// //     backgroundColor: theme.palette.background.paper,
// //   },
//   link: {
//     textDecoration: "none",
//   },
//   textCenter: {
//     textAlign: "center",
//   },imagen:{
//         width: "100%",
//         overflow: 'hidden',

//     },
// }));

const Tarjeta = ({ imagen, titulo }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={3}>
      <Box className={classes.imagen}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${imagen}`}
          className={classes.img}
        />
      </Box>

      <Typography className={classes.textCenter}>{titulo}</Typography>
      <Box display="flex" justifyContent="center">
      <IconButton aria-label="mira el detalle de la pelicula">
        <VisibilityIcon />
      </IconButton>
      </Box>
    </Card>
  );
};

export default Tarjeta;

{
  /* <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="poster pelicula"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="poster pelicula"
                    // src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {pelicula.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
        </Button>
            </CardActions>
        </Card> */
}
