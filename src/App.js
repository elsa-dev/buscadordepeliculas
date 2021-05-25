import { BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';

import Busqueda from './views/Busqueda'
import DetallePeliculas from './views/DetallePeliculas'
import Footer from './views/Footer'
import Home from './views/Home'
import Nav from './views/Nav'
import Page404 from './views/Page404'
import PeliculasLanzamientos from './views/PeliculasLanzamientos'
import PeliculasPopulares from './views/PeliculasPopulares'
import PeliculasPuntuadas from './views/PeliculasPuntuadas'


const App = () => {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
