

const PeliculasSection = ({peliculas, titulo}) => {
    return (
        <section>
            <h2>{titulo}</h2>
            <div>
                {
                    peliculas.map( (pelicula) => (
                        <article>
                            {pelicula.title}
                        </article>

                    )

                    )
                }
            </div>
            
        </section>
    )
}

export default PeliculasSection