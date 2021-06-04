import React from "react";
import { Link } from 'react-router-dom'


import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList } from "react-window";

import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 400,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
}));


function ListaPeliculas({peliculas, titulo, style}) {
    
  return (
    <>
      <Typography>{titulo}</Typography>
      <div>
        {peliculas && peliculas.map((pelicula) => (
        
        <ListItem button style={style} key={pelicula.title}>
          <ListItemAvatar>
            <Avatar src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}>
              
            </Avatar >
          </ListItemAvatar>
          <Link to={`/detalle/${pelicula.id}`}>
          <ListItemText primary={pelicula.title} />
           </Link> 
          
          <IconButton edge="end" aria-label="delete">
            <Link to={`/detalle/${pelicula.id}`}>
             <PlayCircleFilledRoundedIcon /> 
            </Link> 
          </IconButton>
           
        </ListItem>

      ))}
      </div>
      
        
    </>
  );
}

export default ListaPeliculas;




