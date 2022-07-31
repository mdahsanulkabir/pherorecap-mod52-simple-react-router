import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my fancy routing website with header.</h1>
            <nav>
                <Link to="/">HOME</Link>
                <Link to="/friends">FRIENDS</Link>
                <Link to="/about">ABOUT</Link>
            </nav>
        </div>
    );
};

export default Header;  