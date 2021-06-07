import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Button from "@material-ui/core/Button";

import LocalMoviesIcon from '@material-ui/icons/LocalMovies';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link:{
    textDecoration: 'none'
  },
  titleOut: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    }}

   
  
}));

const Nav = () => {

     const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
           
            <LocalMoviesIcon 
            fontSize="large"/>
          
        <Link to="/" className={classes.link}>
          <Button 
          
          variant="contained" color="primary" disableElevation>
            Home
          </Button>
        </Link>

        <Link to="/peliculas-lanzamientos" className={classes.link}>
          <Button variant="contained" color="primary" disableElevation className={classes.titleOut}>
            Ultimos Lanzamientos
          </Button>
        </Link>

        <Link to="/peliculas-populares" className={classes.link}>
          <Button variant="contained" color="primary" disableElevation className={classes.titleOut}>
            Populares
          </Button>
        </Link>

        
        <Link to="/busqueda" className={classes.link}>
          <Button variant="contained" color="primary" disableElevation >
            Buscar
          </Button> 
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;


{/* <Menu>
   <MenuItem component={Link} to={'/first'}>Team 1</MenuItem>
   <MenuItem component={Link} to={'/second'}>Team 2</MenuItem>
</Menu> */}
