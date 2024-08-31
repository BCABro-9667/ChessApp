import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './stylesheet/navbar.css';
import logo from './img/pawan.png';
import DateTime from './other_comp/DateTime'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="top-bar">
                <h6><DateTime/></h6>
            </div>
        <nav className="navbar">
            <div className="navbar-container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Logo" height={60} />
                    <b style={{ color: '#81B64C' }}>CheckmateClub</b>
                </Link>
                <button className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={closeMenu}>
                                <FontAwesomeIcon icon={faHouse} className='fa-icons'/>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" onClick={closeMenu}>About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/chess-profile" onClick={closeMenu}>ChessProfile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tournaments" onClick={closeMenu}>Tournaments</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/chess-results" onClick={closeMenu}>Chess Results</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register-users" onClick={closeMenu}>Register Users</Link>
                        </li>
                       
                    </ul>
                    <Link to="/registration-form">
                        <button className='btn btn-success' onClick={closeMenu}>Registration</button>
                    </Link>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar;
