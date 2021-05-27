import { Link } from 'react-router-dom'


const PeliculasSection = ({peliculas, titulo}) => {
    console.log(peliculas)
    return (
        <section>
            <h2>{titulo}</h2>
            <div>
                {
                    peliculas.map( (pelicula) => (
                        <Link to={`/detalle/${pelicula.id}`}>
                            <article>
                                {pelicula.title}
                            </article>
                        </Link>
                    )
                    )
                }
            </div>
        </section>
    )
}

export default PeliculasSection