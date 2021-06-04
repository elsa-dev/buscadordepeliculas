import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetallePeliculas = () => {
  const [detalle, setDetalle] = useState({});
  const [video, setVideo] = useState({});

  const params = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=a12832899a108764636dd1cf66bbae2d&languaje=es-ES`
    )
      .then((res) => res.json())
      .then((data) => setDetalle(data));

    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=a12832899a108764636dd1cf66bbae2d&languaje=es-ES`
    )
      .then((res) => res.json())
      .then((data) => setVideo(data));
  }, []);

  console.log(detalle);

  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w500/${detalle.backdrop_path}`} alt="poster pelicula" />
      <h1>{detalle.original_title}</h1>
      <div>{detalle.release_date}</div>
      <div>
        Generos
        {detalle.genres &&
          detalle.genres.map((genre) => (
            <ul>
              <li>{genre.name}</li>
            </ul>
          ))}
      </div>

      <h4>
        General
        {detalle.overview}
      </h4>

      <div>
        {video.results &&
          video.results.map((video) => (
            <iframe src={`https://www.youtube.com/embed/${video.key}`} />
          ))}
      </div>
    </>
  );
};

export default DetallePeliculas;

// marcas
//npm i @fortawesome/free-brands-svg-icons
