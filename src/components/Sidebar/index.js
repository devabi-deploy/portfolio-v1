import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from './../../assets/img/logo.png';
import LogoSubtitle from './../../assets/img/logo-subtitle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faCoffee, faAnchor, faAirFreshener } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={ LogoS } alg="Logo" />
                <img src= { LogoSubtitle } alt="Ma-name" className="sub-logo" />
            </Link>
            <nav>
                <NavLink exact="true" activeClassName="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="4d4d43" />
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="4d4d43" />
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="4d4d43" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" className="linkedin-link" rel='noreferrer' href='https://www.linkedin.com/in/bimanyu-nugroho-firmansyah'>
                        <FontAwesomeIcon icon={faCoffee} color="#4d4d43"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" className="github-link" rel='noreferrer' href='https://github.com/devabi-deploy'>
                        <FontAwesomeIcon icon={faAnchor} color="#4d4d43"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" className="youtube-link" rel='noreferrer' href='https://www.youtube.com/channel/UCaIRrULOqOhk_lr-HyVcclQ'>
                        <FontAwesomeIcon icon={faAirFreshener} color="#4d4d43"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;