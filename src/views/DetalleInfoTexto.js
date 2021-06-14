
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const DetalleInfoTexto = ({detalle, detalleReleaseDate, detalleRevenue, detalleBudget}) => {
    return ( 
        <>
        <Box pt={2}>
        <Typography variant="h2" gutterBottom>
          {detalle.original_title}
        </Typography>

        { detalleReleaseDate ? <Typography variant="subtitle2" gutterBottom>
          fecha de estreno:{detalle.release_date}
        </Typography> 
        : <Typography variant="subtitle1" component="h2">
               fecha de estreno: no disponemos de la informacion
            </Typography> }

       

        <Typography variant="body1" pb={3} gutterBottom>
          {detalle.overview}
        </Typography>
        <Typography variant="h6">Duracion: {detalle.runtime} min</Typography>
        <Typography variant="h6">
          Generos:
          {detalle.genres &&
            detalle.genres.map((genre) => (
              <Typography color="primary">{genre.name}</Typography>
            ))}
        </Typography>

        
        { detalleBudget ? <Typography variant="subtitle2" gutterBottom>
          Presupuesto: ${detalle.budget}
        </Typography> 
        : <Typography variant="subtitle1" component="h2">
               Presupuesto:  no informado
            </Typography> }
        
        { detalleRevenue ? <Typography variant="subtitle2" gutterBottom>
          Recaudacion: ${detalle.revenue}
        </Typography> 
        : <Typography variant="subtitle1" component="h2">
               Recaudacion: no informado
            </Typography> }


        <Typography variant="h6">
          Produccion:
          {detalle.production_companies &&
            detalle.production_companies.map((production) => (
              <Typography color="primary">{production.name}</Typography>
            ))}
        </Typography>
      </Box>
        </>
     );
}
 
export default DetalleInfoTexto;