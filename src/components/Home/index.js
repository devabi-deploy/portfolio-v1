import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/img/logo.png';
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hii, <br/> I'm
                Bimanyu Nugroho
                <img src={LogoTitle} alt="Ma-Logo" />
                <br/>
                </h1>
                <h2>Web Developer / PHP Intermidate</h2>
                <Link to="/contact" className="flat-button">Touch Me</Link>
            </div>
        </div>
    )
}

export default Home;