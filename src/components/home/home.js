import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {applicationActions} from '../../store/actions';

//Styles
import styles from './styles.module.css';

const Home = () => {
    const dispatch = useDispatch();
    const {tasks, token, user} = useSelector(state=>state.application);

    const {age, name , email} = user;
    const tasksJSX = tasks.map(item => <li key={item.id}>{item.description}</li>);


    useEffect(()=>{
        dispatch(applicationActions.fetchTasksAsync(token));
        dispatch(applicationActions.fetchUserAsync(token));
    },[token, dispatch]);

    return (
        <div className={styles.wrap}>
            <h1>Home</h1>

            <h2>User data: </h2>
                <div className={styles.data}>
                    <p> Age: {age} </p>
                    <p> Name: {name} </p>
                    <p> Email:{email} </p>
                </div>

            <h2>Tasks:</h2>
            <div className={styles.data}>
                <ol>{tasksJSX}</ol>
            </div>
        </div>
    );
};

export default Home;