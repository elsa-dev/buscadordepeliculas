
import useFetch from '../hooks/useFetch'

//cambiar a lista y carrusel
import PeliculasSection from '../components/PeliculasSection'

import { URL_PELICULAS_LANZAMIENTOS, URL_PELICULAS_POPULARES, URL_PELICULAS_PUNTUADAS } from '../utils/variables'

const Home = () => {

    const peliculasLanzamiento = useFetch(URL_PELICULAS_LANZAMIENTOS)

    const peliculasPopulares = useFetch(URL_PELICULAS_POPULARES)

    const peliculasPuntuadas = useFetch(URL_PELICULAS_PUNTUADAS)

    return(

        //carrusel
        <div>
            <PeliculasSection 
        peliculas={peliculasLanzamiento}
        titulo="Ultimos Lanzamientos carusel"
        /> 
       
        <PeliculasSection 
        peliculas={peliculasPopulares}
        titulo ="Peliculas Populares lista"
        />

       
         <PeliculasSection  
        peliculas = {peliculasPuntuadas}
        titulo ="Peliculas puntuadas lista"
        />


        </div>
    )
}

export default Home;