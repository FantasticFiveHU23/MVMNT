import React from 'react';
import '../styles/Header.css';
import { LoginButton } from "../components/LoginButton";
import logo from "../images/logo.png";
import {ProfilePicture} from "../components/ProfilePicture";

export function Header(props) {
  return (
    <nav>
      <img href="/home-page" className="logo-img" src={logo} alt="logo" />
      <a href='/'>Home</a>
      <a href="/local-finds">Local Finds</a>
      <a href="/top-sellers" onClick={(e) => { e.preventDefault(); window.location.href='/top-sellers' }}>Top Sellers</a>
      <a href="/categories" onClick={(e) => { e.preventDefault(); window.location.href='/categories' }}>Categories</a>
      <a href="/search" onClick={(e) => { e.preventDefault(); window.location.href='/search' }}>Search</a>
      {/* {isLoggedIn ? <ProfilePicture /> : <LoginButton />} */}
      {props.isLoggedIn ? (
        <a href="/profile-page">
          <ProfilePicture className="header-pfp" />
        </a>
      ) : (
        <LoginButton />
      )}
    </nav>
  );
};