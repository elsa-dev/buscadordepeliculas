import PeliculasSection from "../components/PeliculasSection";
import useFetch from "../hooks/useFetch";


import { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const PeliculasPopulares = () => {
    const classes = useStyles();
    const [page, setPage] = useState(1);
    // const [peliculas, setPeliculas] = useState([])
    // const [paginado, setPaginado] = useState([])
    
    const { peliculas, paginado } = useFetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=a12832899a108764636dd1cf66bbae2d&language=es-ES&page=${page}`
    )

  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/popular?api_key=a12832899a108764636dd1cf66bbae2d&language=es-ES&page=${page}`
      
  //   )
  //     .then((res) => res.json())
  //     .then((data) =>{
  //       setPeliculas(data.results)
  //       setPaginado(data.total_pages)})

  // }, [ page]);

  // console.log(page);

    const handleChange = (event, value) => {
    setPage(value);
  };

  console.log(page);
  console.log(paginado);

  return (
    <>
      <PeliculasSection peliculas={peliculas} titulo="Peliculas Populares" />

      <Box m={4} display="flex" justifyContent="center" className={classes.root}>
        <Typography>Page: {page}</Typography>
        <Pagination count={paginado} page={page} onChange={handleChange} />
      </Box>
    </>
  );
};

export default PeliculasPopulares;


// import PeliculasSection from "../components/PeliculasSection";
// import useFetch from "../hooks/useFetch";
// import { URL_PELICULAS_POPULARES } from "../utils/variables";

// import { useState } from 'react'

// import { makeStyles } from '@material-ui/core/styles';
// import Box from "@material-ui/core/Box";
// import Typography from '@material-ui/core/Typography';
// import Pagination from '@material-ui/lab/Pagination';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > * + *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

// const PeliculasPopulares = () => {
//     const classes = useStyles();
//     const [page, setPage] = useState(1);

//   const { peliculas, paginado } = useFetch(`https://api.themoviedb.org/3/movie/popular?api_key=a12832899a108764636dd1cf66bbae2d&language=es-ES&page=${page}`);

//   console.log(page);

//     const handleChange = (event, value) => {
//     setPage(value);
//   };

//   return (
//     <>
//       <PeliculasSection peliculas={peliculas} titulo="Peliculas Populares" />

//       <Box m={4} display="flex" justifyContent="center" className={classes.root}>
//         <Typography>Page: {page}</Typography>
//         <Pagination count={paginado} page={page} onChange={handleChange} />
//       </Box>
//     </>
//   );
// };

// export default PeliculasPopulares;


