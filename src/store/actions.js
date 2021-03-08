import {types} from './types';
import {api} from '../api/api';
import {history} from '../navigation/history';
import {book} from '../navigation/book';

export const applicationActions = Object.freeze({
    //Sync
    startFetching: ()=>{
        return {
            type: types.START_FETCHING,
        };
    },

    stopFetching: ()=>{
        return {
            type: types.STOP_FETCHING,
        };
    },

    fillToken: (token)=>{
        return {
            type: types.TOKEN_FILL,
            payload: token
        }
    },

    fillUser: (user)=>{
        return {
            type: types.USER_FILL,
            payload: user
        }
    },

    fillTasks: (tasks)=>{
        return {
            type: types.TASKS_FILL,
            payload: tasks
        }
    },

    fetchTokenAsync: (formData)=> async(dispatch) => {
        dispatch(applicationActions.startFetching());

        const response = await api.login.fetch(formData);

        if(response.status === 200){
            const {token} = await response.json();

            dispatch(applicationActions.fillToken(token));
            history.push(book.home);
        }

        dispatch(applicationActions.stopFetching());
    },

    fetchTasksAsync: (token)=> async(dispatch) => {
        dispatch(applicationActions.startFetching());

        const response = await api.tasks.fetch(token);

        if(response.status === 200){
            const {data} = await response.json();
            console.log('data tasks', data);
            dispatch(applicationActions.fillTasks(data));
        }
        dispatch(applicationActions.stopFetching());
    },

    fetchUserAsync: (token)=> async(dispatch) => {
         dispatch(applicationActions.startFetching());

        const response = await api.user.fetch(token);

        if(response.status === 200){
            const data = await response.json();
            console.log('data user', data);
            dispatch(applicationActions.fillUser(data));
        }
         dispatch(applicationActions.stopFetching());
    },

})