import PeliculasSection from '../components/PeliculasSection'
import useFetch from '../hooks/useFetch'

import { URL_PELICULAS_POPULARES } from '../utils/variables'

const PeliculasPopulares = () => {

    const peliculasPopulares = useFetch(URL_PELICULAS_POPULARES)

    

    return(
        <PeliculasSection 
        peliculas={peliculasPopulares}
        titulo ="Peliculas Populares"
        />
    )
}

export default PeliculasPopulares;