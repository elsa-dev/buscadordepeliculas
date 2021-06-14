import React from 'react';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Tarjeta from '../components/Tarjeta'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    
  link: {
    textDecoration: "none",
  },
    textCenter: {
        textAlign: "center",
  }
     
});

const PeliculasSection = ({peliculas, titulo}) => {
    const classes = useStyles();
    return (
        <Container>
            <Box py={4}>
               <Typography variant="h6" y={6} className={classes.textCenter}>{titulo}</Typography> 
            </Box>
            
            <Grid container spacing={2}>
                { peliculas &&
                    peliculas.map( (pelicula) => (
                       <Grid item xs={12} sm={6} md={4} lg={3}
                       key={pelicula.id}>
                           <Link  to={`/detalle/${pelicula.id}`} className={classes.link} >
                               <Tarjeta
                                titulo={pelicula.title}
                                imagen={pelicula.poster_path}
                               />
                           

                           </Link>
                           
                           </Grid> 
                    ))}
            </Grid>
                
            
        </Container>
    )
}

export default PeliculasSection








