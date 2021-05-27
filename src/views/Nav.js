
import { Link } from 'react-router-dom'

const Nav = () => {
    return(
        <nav>
            <ul>
                <li>
                    Pochoclo
               </li>
               <li>
                    <Link to='/'>Home</Link>
               </li>
               <li>
                    <Link to='/peliculas-lanzamientos'>Ultimos Lanzamientos</Link>
               </li>
               <li>
                    <Link to='/peliculas-populares'>Populares</Link>
               </li>

               <li>
                    <Link to='/peliculas-puntuadas'>Puntuadas sacar</Link>
               </li>

               <li>
                    <Link to='/busqueda'>Buscar</Link>
               </li>
               
            </ul>
        </nav>
    )

}

export default Nav;