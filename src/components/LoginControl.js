import React, {useState} from 'react';
import {LoginButton,LogoutButton} from "./MyButtons";
import Greeting from "./Greeting";
import ActiveUser from "./ActiveUser";

const LoginControl = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let button;

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    if (isLoggedIn){
        button = <LogoutButton onClick={handleLogoutClick}/>
    } else {
        button = <LoginButton onClick={handleLoginClick}/>
    }

    return (
        <div style={{textAlign:"center"}}>
            <Greeting isLoggedIn={isLoggedIn}/>
            <ActiveUser isLoggedIn = {isLoggedIn}/>
            {button}
        </div>
    )

};

export default LoginControl;