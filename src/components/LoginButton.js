import React from 'react';
import '../styles/LoginButton.css';
import { useHistory } from 'react-router-dom';

const LoginButton = () => {
    const history = useHistory();

    const handleClick = () => {
      history.push('/home-page-logged-in');
    }
    
    return (
        <button className="login-button">
            Log In
        </button>
    );
}
export default LoginButton;
