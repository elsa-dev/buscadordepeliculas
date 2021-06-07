import React from "react";
import { Link } from "react-router-dom";


import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList } from "react-window";

import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleFilledRoundedIcon from "@material-ui/icons/PlayCircleFilledRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 400,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center",
  },
  arrow:{
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
}));

function ListaPeliculas({ peliculas, titulo, style }) {
  const classes = useStyles();
  return (
    <>
    
        <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
        <Typography variant="h5" className={classes.textCenter}>{titulo}</Typography>
      </Box>

      <List>
        {peliculas &&
          peliculas.map((pelicula) => (
            <ListItem button style={style} key={pelicula.title}>

              <ListItemAvatar>
                <Avatar
                  src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
                ></Avatar>
              </ListItemAvatar>

              <Link to={`/detalle/${pelicula.id}`} className={classes.link}>
                <ListItemText primary={pelicula.title} />
              </Link>

              <IconButton edge="end" aria-label="delete">
                <Link to={`/detalle/${pelicula.id}`} className={classes.link}>
                  <PlayCircleFilledRoundedIcon />
                </Link>
              </IconButton>
            </ListItem>
          ))}
      </List>

    
      
    </>
  );
}

export default ListaPeliculas;
