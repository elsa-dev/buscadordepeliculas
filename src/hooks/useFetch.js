import { useState, useEffect } from "react";

const useFetch = (url, page) => {
  const [peliculas, setPeliculas] = useState([]);
  const [paginado, setPaginado] = useState([]);
  const [detalle, setDetalle] = useState({});
  const [video, setVideo] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPeliculas(data.results);
        setPaginado(data.total_pages);
        setDetalle(data);
        setVideo(data);
        console.log(paginado)
        console.log(detalle)
      });
  }, [page]);

  return {
    peliculas: peliculas,
    paginado: paginado,
    detalle: detalle,
    video: video,
  };
};

export default useFetch;
