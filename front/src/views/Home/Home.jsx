// import NavBar from "../../components/NavBar/NavBar";
import logo4 from '../../assets/logo4.png';
import logo2 from '../../assets/logo2.png';
import logo from '../../assets/logo.png';
import style from './Home.module.css';
import { useEffect, useState } from 'react';

const Home = () => {
    const images = [logo, logo2, logo4];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); 

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className={style.container}>
            {/* <NavBar /> */}
            {/* <img src={logo} alt="Logo Clínica" className={style.logo} /> */}
            <div className={style.carousel}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Imagen ${index + 1}`}
                        className={`${style.carouselImage} ${index === currentImageIndex ? style.active : ''}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
