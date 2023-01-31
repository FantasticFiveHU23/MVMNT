import React from 'react';
import '../styles/Header.css';
import LoginButton from "../components/LoginButton";
<<<<<<< HEAD
import logo from "../images/logo.png";
import ProfilePicture from "../components/ProfilePicture";
=======
>>>>>>> 81784fec8f229c241fbeffa4bde0ed0283124f8a

class Header extends React.Component {
    render (){
        return (
<<<<<<< HEAD
            // Create list of header options. (Logo will be a link to go to HomePage)
            <nav>
                <img href="/home-page" className="logo-img" src={logo} alt="logo" />
=======
            <nav>
>>>>>>> 81784fec8f229c241fbeffa4bde0ed0283124f8a
                <a href="/local-finds">Local Finds</a>
                <a href="/top-sellers">Top Sellers</a>
                <a href="/categories">Categories</a>
                <a href="/search">Search</a>
<<<<<<< HEAD
                {this.props.isLoggedIn ? <ProfilePicture /> : <LoginButton/>} {/* loggedIn=true --> display ProfilePicture loggedIn=false --> display LoginButton */}
=======
                <LoginButton/>
>>>>>>> 81784fec8f229c241fbeffa4bde0ed0283124f8a
            </nav>
        )
    }
}
export default Header;