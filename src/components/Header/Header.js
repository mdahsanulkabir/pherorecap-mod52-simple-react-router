import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my fancy routing website with header.</h1>
            <nav>
                <CustomLink to="/">HOME</CustomLink>
                <CustomLink to="/friends">FRIENDS</CustomLink>
                <CustomLink to="/about">ABOUT</CustomLink>
            </nav>
        </div>
    );
};

export default Header;  