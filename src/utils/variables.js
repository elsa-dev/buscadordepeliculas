

const URL_BASE = "https://api.themoviedb.org/3/movie/"
const API_KEY = "a12832899a108764636dd1cf66bbae2d"
const QUERY_PARAMS = "&language=es-ES&page=1"

export const URL_PELICULAS_LANZAMIENTOS = URL_BASE + "upcoming" + "?api_key=" + API_KEY + QUERY_PARAMS

export const URL_PELICULAS_POPULARES = URL_BASE + "popular" + "?api_key=" + API_KEY + QUERY_PARAMS

export const URL_PELICULAS_PUNTUADAS = URL_BASE + "top_rated" + "?api_key=" + API_KEY + QUERY_PARAMS



