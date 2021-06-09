import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";

import LocalMoviesIcon from "@material-ui/icons/LocalMovies";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link: {
    textDecoration: "none",
  },
  
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <LocalMoviesIcon fontSize="large" />

        <Link to="/" className={classes.link}>
          <Button variant="contained" color="primary" disableElevation>
            Home
          </Button>
        </Link>

        <Link to="/peliculas-lanzamientos" className={classes.link}>
          <Hidden xsDown>
            <Button variant="contained" color="primary" disableElevation>
              Ultimos Lanzamientos
            </Button>
          </Hidden>
        </Link>

        <Link to="/peliculas-populares" className={classes.link}>
          <Hidden xsDown>
          <Button variant="contained" color="primary" disableElevation>
            Populares
          </Button>
          </Hidden>
        </Link>

        <Link to="/busqueda" className={classes.link}>
          <Button variant="contained" color="primary" disableElevation>
            Buscar
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;


