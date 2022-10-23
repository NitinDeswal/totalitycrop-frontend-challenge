import React, { useState, useCallback } from "react";


import logo from './logo.webp';
import './nav.css';

const Header = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = useCallback(() => setShowSidebar((value) => !value));
    return (
        <div>
            <nav className="navbar ">
                <div className="navbar-container">
                <div className="navbar-brand">
                        <a href="#home">
                            <img src={logo} alt="Starbucks" />
                        </a>
                    </div>
                    <ul className="navbar-nav-left">
                        
                        <li>
                            <a className="hover-underline-animation" href="#menu">
                                Menu
                            </a>
                        </li>
                        <li>
                            <a className="hover-underline-animation" href="#rewards">
                                Rewards
                            </a>
                        </li>
                        <li>
                            <a className="hover-underline-animation" href="#gift">
                                Gift Cards
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav-right">
                        <li>
                        <a className="hover-underline-animation" href="!#">
      <i className="fa-solid fa-location-dot"></i>
        <span>Find a store</span>
      </a>
                        </li>
                        <li>
                            <button className="btn btn-dark-outline">Sign in</button>
                        </li>
                        <li>
                            <button className="btn btn-dark">Join now</button>
                        </li>
                       
                    </ul>
                    <div
                        type="button"
                        className="hamburger"
                        onClick={toggleSidebar}
                        id="menu-btn">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    
                </div>
            </nav>

            {/* <!-- Mobile Menu --> */}
            {showSidebar ? (
                <div className="background-side">
                    <aside className="mobile-menu hidden " id="menu">
                        <ul>
                        <li>
                            <a className="hover-underline-animation" href="#menu">
                                Menu
                            </a>
                        </li>
                        <li>
                            <a className="hover-underline-animation" href="#rewards">
                                Rewards
                            </a>
                        </li>
                        <li>
                            <a className="hover-underline-animation" href="#gift">
                                Gift Cards
                            </a>
                        </li>
                        </ul>
                        <div className="border"></div>
                        <div className="mobile-menu-bottom">
                            <button className="btn btn-dark-outline">Sign in</button>
                            <button className="btn btn-dark">Join now</button>
                            <div>
                            <a className="hover-underline-animation" href="!#">
      <i className="fa-solid fa-location-dot"></i>
        <span>Find a store</span>
      </a>
                            </div>
                        </div>
                    </aside>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default Header;