import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/img/logo.png';
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm
                <img src={LogoTitle} alt="Ma-Logo" />
                Bimanyu Nugroho
                <br/>
                Web Developer
                </h1>
                <h2>Fullstack Developer | Content creator IT</h2>
                <Link to="/contact" className="flat-button">Touch Me</Link>
            </div>
        </div>
    )
}

export default Home;