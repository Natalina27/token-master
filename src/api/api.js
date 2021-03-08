//https://api-nodejs-todolist.herokuapp.com/user/me
const base = 'https://api-nodejs-todolist.herokuapp.com';
const uri = `${base}`;

export const api = Object.freeze({
    user: {
        fetch: async (token) => {
            return await fetch(`${uri}/user/me`, {
                method: "GET",
                headers: {
                    Authorization: token,
                    'Content-Type': 'application/json'
                }
            } );
        }
    },
    login: {
        fetch: async (formData) => {
            return await fetch(`${uri}/user/login`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            } );
        }
    },
    tasks: {
        fetch: async (token = '') => {
            return await fetch(`${uri}/task`, {
                method: "GET",
                headers: {
                    Authorization: token,
                    'Content-Type': 'application/json'
                }
            });
        }
    }
});