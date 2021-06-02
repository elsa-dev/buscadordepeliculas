import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  
}));

const Nav = () => {

     const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
           
            <LocalMoviesIcon />
          
        <Link to="/">
          <Button variant="contained" color="primary" disableElevation>
            Home
          </Button>
        </Link>

        <Link to="/peliculas-lanzamientos">
          <Button variant="contained" color="primary" disableElevation>
            Ultimos Lanzamientos
          </Button>
        </Link>

        <Link to="/peliculas-populares">
          <Button variant="contained" color="primary" disableElevation>
            Populares
          </Button>
        </Link>

        
        <Link to="/busqueda">
          <Button variant="contained" color="primary" disableElevation>
            Buscar
          </Button> 
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
