import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';



const useStyles = makeStyles({
    root: {
        // maxWidth: 300,
    },
});

const Tarjeta = ({imagen,titulo}) => {
    const classes = useStyles();

    return(
        <Card className={classes.root}
        elevation={3}>
            
            <img src={`https://image.tmdb.org/t/p/w500/${imagen}`} />
            <Typography>{titulo}</Typography>
            <IconButton aria-label="add to favorites">
          <VisibilityIcon />
        </IconButton>
                               
        </Card>
        
        
    )
}

export default Tarjeta

{/* <Card className={classes.root}>
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
        </Card> */}