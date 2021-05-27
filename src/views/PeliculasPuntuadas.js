import PeliculasSection from '../components/PeliculasSection'

import useFetch from '../hooks/useFetch'

import { URL_PELICULAS_PUNTUADAS } from '../utils/variables'

const PeliculasPuntuadas = () =>{

    const peliculasPuntuadas = useFetch(URL_PELICULAS_PUNTUADAS)
    
    return(
        <PeliculasSection  
        peliculas = {peliculasPuntuadas}
        titulo ="peliculas puntuadas"
        />
    )
}

export default PeliculasPuntuadas;