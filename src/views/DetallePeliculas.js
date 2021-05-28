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

console.log(detalle.genres)

console.log(detalle.genres[0].name)

    return(
        <>
        
        {/* <div>
           
            {detalle.genres.map( (genre) => 
                <ul>
                    <li>{genre}</li>
                </ul>
            )}
        </div> */}
        <h4>
            {detalle.overview}
        </h4>
        </>
    )
}

export default DetallePeliculas;


////video youtube
//fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=a12832899a108764636dd1cf66bbae2d&languaje=es-ES`)

// marcas 
//npm i @fortawesome/free-brands-svg-icons