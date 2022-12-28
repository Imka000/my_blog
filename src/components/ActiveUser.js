import React from 'react';

const ActiveUser = (props) => {
    return (
        <h2>Пользователь <b>{props.isLoggedIn ? 'сейчас' : 'не'}</b> на сайте</h2>
    );
};

export default ActiveUser;