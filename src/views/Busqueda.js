import { useState, useEffect } from "react"
import PeliculasSection from '../components/PeliculasSection'



const Busqueda = () => {
    const [valorDelInput, setValorDelInput] = useState('')
    const [busqueda, setBusqueda] = useState('')
    const [peliculaBuscada, setPeliculaBuscada] = useState([])

    useEffect ( ()=> {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=c7e318bc4679faa16a6f940e1435e019&languaje=es-ES&query=${valorDelInput}&page=1`)
        .then( res => res.json())
        .then ( data => setPeliculaBuscada(data.results))

    }, [busqueda])

    console.log(peliculaBuscada)



    const handleChange = (e) => {
        setValorDelInput(e.target.value)
    }

    console.log(busqueda)

    const handleSubmit = (e) => {
        e.preventDefault()
        setBusqueda(valorDelInput)
    }

    return(
        <>
         <form onSubmit={handleSubmit}>
            <label>
                Busca tu Pelicula
               <input  value={valorDelInput} onChange={handleChange} /> 
            </label>
            
        </form>

        <PeliculasSection 
        peliculas={peliculaBuscada}
        
        />
       
        </>
       
        
        
    )
}

export default Busqueda;

//fetch inicial a
//https://api.themoviedb.org/3/search/movie?api_key=c7e318bc4679faa16a6f940e1435e019&languaje=es-ES&query=undefined&page=1
//https://api.themoviedb.org/3/search/movie?api_key=c7e318bc4679faa16a6f940e1435e019&languaje=es-ES&query=${valorDelInput}&page=1




//  <section>
//             {peliculaBuscada && peliculaBuscada.map( pelicula=>
//                 <div>
//                     <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} />
//                     <h2>{pelicula.original_title}</h2>
//                 </div>
//             )}

//         </section>