import PeliculasSection from '../components/PeliculasSection'
import useFetch from '../hooks/useFetch'

import { URL_PELICULAS_LANZAMIENTOS } from '../utils/variables'

const PeliculasLanzamientos = () => {

    const peliculasLanzamiento = useFetch(URL_PELICULAS_LANZAMIENTOS)

    return(
        <PeliculasSection 
        peliculas={peliculasLanzamiento}
        titulo="Ultimos Lanzamientos"
        
        />
    )
}

export default PeliculasLanzamientos;