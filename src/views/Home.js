
import useFetch from '../hooks/useFetch'

//cambiar a lista y carrusel
import PeliculasSection from '../components/PeliculasSection'
import Carusel from '../components/Carusel'

import { URL_PELICULAS_LANZAMIENTOS, URL_PELICULAS_POPULARES, URL_PELICULAS_PUNTUADAS } from '../utils/variables'

const Home = () => {

    

    const peliculasPopulares = useFetch(URL_PELICULAS_POPULARES)

    const peliculasPuntuadas = useFetch(URL_PELICULAS_PUNTUADAS)

    return(

        
        <div>
            <Carusel>      
            </Carusel>

            {/* <PeliculasSection 
        peliculas={peliculasLanzamiento}
        titulo="Ultimos Lanzamientos carusel" 
        /> */}
       
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