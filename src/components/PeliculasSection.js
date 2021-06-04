import { Link } from 'react-router-dom'


const PeliculasSection = ({peliculas, titulo}) => {
    
    return (
        <section>
            <h2>{titulo}</h2>
            <div>
                { peliculas &&
                    peliculas.map( (pelicula) => (
                        <>
                        
                        <Link to={`/detalle/${pelicula.id}`}>
                            
                            <article key={pelicula.title}>
                                <img src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} />
                                <h3>{pelicula.title}
                                    </h3>
                            </article>
                        </Link>
                        
                        </>
                    )
                    )
                }
            </div>
        </section>
    )
}

export default PeliculasSection