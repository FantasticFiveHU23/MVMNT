import React from 'react';
import '../styles/Header.css';
import LoginButton from "../components/LoginButton";
import logo from "../images/logo.png";
import ProfilePicture from "../components/ProfilePicture";

class Header extends React.Component {
    render (){
        return (
            <nav>
                <img href="/home-page" className="logo-img" src={logo} alt="logo" />
                <a href="/local-finds">Local Finds</a>
                <a href="/top-sellers">Top Sellers</a>
                <a href="/categories">Categories</a>
                <a href="/search">Search</a>
                {this.props.isLoggedIn ? <ProfilePicture /> : <LoginButton/>}
            </nav>
        )
    }
}
export default Header;