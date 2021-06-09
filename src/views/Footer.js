import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link: {
    textDecoration: "none",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="primary.main"
        color="primary.contrastText"
        p={2}
      >
        <Toolbar>
          <Link to="/peliculas-lanzamientos" className={classes.link}>
            <Hidden only={['sm', 'md', 'lg', 'xl']}>
              <Button variant="contained" color="primary" disableElevation>
                Lanzamientos
              </Button>
            </Hidden>
          </Link>

          <Box px={2}>
            <Typography>
              MOVIE APP
            </Typography>
          </Box>

          <Link to="/peliculas-populares" className={classes.link}>
            <Hidden only={['sm', 'md', 'lg', 'xl']}>
              <Button variant="contained" color="primary" disableElevation>
                Populares
              </Button>
            </Hidden>
          </Link>
        </Toolbar>
      </Box>
    </>
  );
};

export default Footer;
