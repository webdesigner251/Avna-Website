
import React, { useState , useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Images/logo.png';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    const location = useLocation();
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const closeNavbar = () => {
        setIsCollapsed(true);
    };

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={Logo} alt="website logo" width="100%" height="auto" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded={!isCollapsed} aria-label="Toggle navigation" onClick={toggleNavbar}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/" onClick={closeNavbar}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about" onClick={closeNavbar}>About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} to="/services" onClick={closeNavbar}>Our Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`} to="/products" onClick={closeNavbar}>Our Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact" onClick={closeNavbar}>Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
