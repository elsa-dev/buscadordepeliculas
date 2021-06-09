import { useState, useEffect } from 'react'

const useFetch = (url, page) => {
    const [peliculas, setPeliculas] = useState([])
    const [paginado, setPaginado] = useState([])

    useEffect( () => {
        fetch(url)
        .then (res => res.json())
        .then ( data => {
            setPeliculas(data.results)
        setPaginado(data.total_pages)})

    }, [] )
    
    // console.log(peliculas)
    // console.log(paginado)

    return {peliculas: peliculas,
            paginado:paginado}
}

export default useFetch


