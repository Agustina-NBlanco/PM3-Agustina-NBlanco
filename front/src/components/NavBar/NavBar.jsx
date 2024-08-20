
import NavBarLinks from "./NavBarLinks";
import styles from './NavBar.module.css'
import logo4 from '../../assets/logo4.png'



const NavBar = () => {

    return (
        <nav className={styles.nav}>
            <div className={styles.navContainer}>
                <img src={logo4} className={styles.logo} alt="Logo De la clínica" />
                <NavBarLinks />
            </div>
        </nav>
    )
}

export default NavBar;