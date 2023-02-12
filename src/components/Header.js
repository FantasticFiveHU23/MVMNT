import React from 'react';
import '../styles/Header.css';
import LoginButton from "../components/LoginButton";
import logo from "../images/logo.png";
import ProfilePicture from "../components/ProfilePicture";

const Header = (props) => {
    return (
        // Create list of header options. (Logo will be a link to go to HomePage)
        <nav>
            <img href="/home-page" className="logo-img" src={logo} alt="logo" />
            <a href='/'>Home</a>
            <a href="/local-finds">Local Finds</a>
            <a href="/top-sellers">Top Sellers</a>
            <a href="/categories">Categories</a>
            <a href="/search">Search</a>
            {props.isLoggedIn ? <ProfilePicture /> : <LoginButton/>}
        </nav>
    );
};

export default Header;
