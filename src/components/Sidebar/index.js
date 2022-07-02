import { Link } from 'react-router-dom';
import './index.scss';
import LogoS from './../../assets/img/logo.png';
import LogoSubtitle from './../../assets/img/logo-subtitle.png';

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={ LogoS } alg="Logo" />
                <img src= { LogoSubtitle } alt="Ma-name" className="sub-logo" />
            </Link>
        </div>
    )
}

export default Sidebar;