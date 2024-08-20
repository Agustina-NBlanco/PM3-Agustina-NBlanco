import styles from './NavBarLinks.module.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearUser } from '../../redux/reducer'

const NavBarLinks = () => {

    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(clearUser())
        navigate("/")

    }

    return (
        <ul className={styles.ul}>
            <li><Link to="/">Home</Link></li>
            {user && <li><Link to="/mis-turnos">Mis Turnos</Link></li>}
            {user && <li><Link to="/crear-turnos">Crear Nuevos Turnos</Link></li>}
            {user && <li><button onClick={handleLogout}>Cerrar Sesión</button></li>}
            {!user && < li > <Link to="/register">Registrarse</Link></li>}
            {!user && <li><Link to="/login">Iniciar Sesión</Link></li>}
        </ul >
    )
}


export default NavBarLinks