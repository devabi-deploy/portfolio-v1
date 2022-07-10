import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/img/logo.png';
import './index.scss';
import AnimateLogos from '../AnimateLogos';

const Home = () => {
    const [logoClass, setLogoClass] = useState('text-animate');
    const nameArray = [' ', 'A', 'b', 'i', 'm', 'a', 'n', 'y', 'u']
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v']
    
    useEffect(() => {
        const asyncFn = async () => {
            return setTimeout(() => {
                setLogoClass('text-animate-hover')
            }, 2000);
        };
        asyncFn();
    }, []);
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={logoClass}>H</span>
                <span className={`${logoClass} _12`}>i,</span>
                <br/>
                <span className={`${logoClass} _13`}>I</span>
                <span className={`${logoClass} _14`}>'m</span>
                <AnimateLogos logoClass={logoClass}
                strArray={nameArray}
                idx={20} />
                {/* <img src={LogoTitle} alt="Ma-Logo" /> */}
                <br/>
                <AnimateLogos logoClass={logoClass}
                strArray={jobArray}
                idx={28} />
                </h1>
                <h2>PHP Intermidate | CodeIgniter | Laravel</h2>
                <Link to="/contact" className="flat-button">Touch Me</Link>
            </div>
        </div>
    )
}

export default Home;