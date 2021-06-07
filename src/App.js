import { BrowserRouter, Route, Switch} from 'react-router-dom'


import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { purple} from "@material-ui/core/colors"

import Busqueda from './views/Busqueda'
import DetallePeliculas from './views/DetallePeliculas'
import Footer from './views/Footer'
import Home from './views/Home'
import Nav from './views/Nav'
import Page404 from './views/Page404'
import PeliculasLanzamientos from './views/PeliculasLanzamientos'
import PeliculasPopulares from './views/PeliculasPopulares'
import PeliculasPuntuadas from './views/PeliculasPuntuadas'


const theme = createMuiTheme({
    palette: {
    primary: purple
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>

        <Nav />

       <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/peliculas-lanzamientos" component={PeliculasLanzamientos} />
         <Route path="/peliculas-populares" component={PeliculasPopulares} />
         <Route path="/peliculas-puntuadas" component={PeliculasPuntuadas} />
         <Route path="/busqueda" component={Busqueda} />
         <Route path="/detalle/:id" component={DetallePeliculas} />
         <Route component={Page404} />
        </Switch>    

        <Footer />

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
