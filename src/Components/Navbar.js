import React, { useState } from 'react';
import logo from '../assets/boulder_innovation_logo.png'
import profile from '../assets/April_img.jpg'

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-gradient topbar static-top shadow d-flex justify-content-between px-5">
            {/* Brand Logo on the Left */}
            <a className="navbar-brand d-flex align-items-center" href="index.html">
                <div className="navbar-brand-icon">
                    <img
                        src={logo}
                        alt="Brand Logo"
                        style={{ width: '150px', height: '40px' }}
                    />
                </div>
            </a>

            {/* Navbar Right - Dynamic Button & User Dropdown */}
            <ul className="navbar-nav ml-auto">
                {/* Dynamic Button */}
                <li className="nav-item">
                    <a href="/M365_Licence_Assignment.html">
                        
                    </a>
                </li>

                {/* Custom User Dropdown */}
                <li className="nav-item">
                    <div className="dropdown" onClick={toggleDropdown}>
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">April</span>
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">    </span>
                        <img
                            className="img-profile"
                            style={{ height: '40px', width: '40px' }}
                            src={profile}
                            alt="User"
                        />

                        {/* Custom Dropdown Menu */}
                        {isDropdownOpen && (
                            <div
                                className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                style={{
                                    position: 'absolute',
                                    top: '50px',
                                    right: '0',
                                    display: 'block',
                                    backgroundColor: '#fff',
                                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                    borderRadius: '4px',
                                    minWidth: '200px',
                                }}
                            >
                                <a
                                    href="/login.html"
                                    className="dropdown-item"
                                    onClick={() => {sessionStorage.removeItem('login')}}
                                >
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </a>
                            </div>
                        )}
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;