import *as axios from 'axios';

const instance = axios.create({
    baseURL: (`https://table-c4f8c.firebaseio.com/`),
});

export const Api = {
    requestUsers(){
        return instance.get(`users.json`)
    },
    addUser(user){
        return instance.post(`users.json`, user)
    },
    deleteUser(userId){
        return instance.delete(`users/${userId}.json`)
    }
}