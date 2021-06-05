import React from 'react';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';


import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Tarjeta from '../components/Tarjeta'



const PeliculasSection = ({peliculas, titulo}) => {
    
    return (
        <Container>
            <Typography>{titulo}</Typography>
            <Grid container spacing={2}>
                { peliculas &&
                    peliculas.map( (pelicula) => (
                       <Grid item xs={12} sm={6} md={4} lg={3}
                       key={pelicula.title}>
                           <Link  to={`/detalle/${pelicula.id}`}>
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







//   { peliculas &&
//                     peliculas.map( (pelicula) => (
//                         <>
                        
//                         <Link to={`/detalle/${pelicula.id}`}>
                            
//                             <Card item key={pelicula.title}>
//                                 <img src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} />
//                                 <h3>{pelicula.title}
//                                     </h3>
//                             </Card>
//                         </Link>
                        
//                         </>
//                     )
//                     )
//                 }

