import React, {useState} from 'react';
import styles from '../styles/UserProfile.module.css'

const UserProfile = () => {

    const getValue = (event) => {
        return event.target.value - event.target.checked ? 'выбран' : 'отменен';
    }

    const getValues = (event) => {
        event.preventDefault();
        const elements = event.target.elements;

        for (let i = 0; i < elements.length - 1; i++){
                console.log(elements[i].value);
        }

    }

    return (
        <form onSubmit={getValues} className={styles.form}>
            <div className={styles.form_control}>
                <label htmlFor="fio">ФИО</label>
                <input
                    onChange={getValue}
                    // onFocus={focus}
                    // onBlur={blur}
                    // onSelect={select}
                    type="text"
                    id="fio"
                    placeholder="Введите ФИО"
                    defaultValue="Test"
                />
            </div>
            <div className={styles.form_control}>
                <label htmlFor="email">Почта</label>
                <input
                    onInput={getValue}
                    type="email"
                    id="email"
                    placeholder="Введите почту"/>
            </div>
            <div className={styles.form_control}>
                <label htmlFor="self">О себе</label>
                <textarea
                    onChange={getValue}
                    id="self"/>
            </div>
            <div className={styles.form_control}>
                <label htmlFor="city">Город</label>
                <select
                    onChange={getValue}
                    id="city">
                    <option value="Бишкек">Бишкек</option>
                    <option value="Ош">Ош</option>
                    <option value="Каракол">Каракол</option>
                </select>
            </div>
            <div className={styles.form_control}>
                <h3>Выберите курс</h3>
                <label>
                    JavaScript
                    <input
                        onChange={getValue}
                        type="checkbox"
                        value="js"/>
                </label>
                <label>
                    Java
                    <input
                        onChange={getValue}
                        type="checkbox"
                        value="java"/>
                </label>
                <label>
                    Python
                    <input
                        onChange={getValue}
                        type="checkbox"
                        value="py"/>
                </label>
            </div>
            <div className={styles.form_control}>
                <h3>Выберите филиал</h3>
                <label>
                    Филиал №1
                    <input onChange={getValue} type="radio" name="branch" value="1"/>
                </label>
                <label>
                    Филиал №2
                    <input onChange={getValue} type="radio" name="branch" value="2"/>
                </label>
            </div>
            <div className={styles.form_control}>
                <input onSubmit={getValues} className={styles.btn} type="submit" value="Сохранить"/>
            </div>
        </form>
    );
};

export default UserProfile;