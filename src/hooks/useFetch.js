import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [peliculas, setPeliculas] = useState([])
    const [paginado, setPaginado] = useState([])

    useEffect( () => {
        fetch(url)
        .then (res => res.json())
        .then ( data => {
            setPeliculas(data.results)
        setPaginado(data)})

    }, [] )
    
    console.log(peliculas)
    console.log(paginado)

    return peliculas
}

export default useFetch