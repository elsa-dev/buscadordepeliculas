import { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'

const DetallePeliculas = () => {

    const [detalle, setDetalle] = useState({})

    const params = useParams()
    console.log(params)

    useEffect( () => {
        fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=a12832899a108764636dd1cf66bbae2d&languaje=es-ES`)
        .then(res => res.json())
        .then(data => setDetalle(data))

    },[])

console.log(detalle)

    return(
        <>
        <p>{detalle.overview}</p>
        {/* <h4>{detalle.genres[0].name}</h4> */}
        </>
    )
}

export default DetallePeliculas;


////video youtube
//fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=a12832899a108764636dd1cf66bbae2d&languaje=es-ES`)