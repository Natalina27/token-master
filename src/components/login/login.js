import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLogin } from './hooks/useLogin';
import styles from './styles.module.css';
import {applicationActions} from '../../store/actions';

const Login = () => {
    const {email, password, setEmail, setPassword} = useLogin();
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        // const userData = {email, password}; we don't have registration for now
        const mockData = {
            email: "muh.nurali43@gmail.com",
            password: "12345678"
        };

        dispatch(applicationActions.fetchTokenAsync(mockData))
    }
    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className={styles.wrap}>
                <div className={styles.form}>
                    <input type="email"
                           className={styles.input}
                           id="emailInput"
                           placeholder="Email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="password"
                           className={styles.input}
                           id="passwordInput"
                           placeholder="Password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className={styles.submit} type="submit">LOGIN</button>
            </form>
        </div>
    );
};

export default Login;