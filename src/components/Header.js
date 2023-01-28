import React from 'react';
import '../styles/Header.css';
import LoginButton from "../components/LoginButton";

class Header extends React.Component {
    render (){
        return (
            <nav>
                <a href="/local-finds">Local Finds</a>
                <a href="/top-sellers">Top Sellers</a>
                <a href="/categories">Categories</a>
                <a href="/search">Search</a>
                <LoginButton/>
            </nav>
        )
    }
}
export default Header;