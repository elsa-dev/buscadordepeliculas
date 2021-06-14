import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';


const useStyles = makeStyles({
  
    text: {
        textAlign: "center",
        fontFamily: "Bangers",
        color: "error.main"
  }
     
});

const Page404 = () => {
    const classes = useStyles();
    return(
        <>
        <Box color="error.main" bgcolor="warning.main">
              <Typography variant="h2" component="h2"  className={classes.text}>
            Sali de aca Maravilla!
        </Typography>
        <Typography className={classes.text}>
            PAGUE 404
        </Typography>
        </Box>
      
        </>
    )
}

export default Page404;