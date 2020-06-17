import { Api } from "../api/api";

const SET_USERS = 'SET_USERS';
const SET_USER = 'SET_USER';
const DELETE_USER = 'DELETE_USER';
const LOADING = 'LOADING';

const initialState = {
    users:[],
    load: false
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case SET_USERS:
            return{
                ...state,
                users: action.payload
            };
        case SET_USER:
            return{
                ...state,
                users: [...state.users, action.user]
            };
        case DELETE_USER:
            return{
                ...state,
                users: state.users.filter(user => user.id !== action.userId)
            };
        case LOADING:
            return{
                ...state,
                load: action.load
            };
        default:
            return state;
    }
}

const setUsers = (payload) => ({type: SET_USERS, payload});
const setUser = (user) => ({type: SET_USER, user});
const onUserDelete = (userId) => ({type: DELETE_USER, userId});
const loading = (load) => ({type: LOADING, load});

export const requestUsers = () => async(dispatch) => {
    dispatch(loading(true))
    const response = await Api.requestUsers();
    if(response.data !== null){
        const payload = Object.keys(response.data).map(key => {
            return{
                ...response.data[key],
                id: key,
                }
        })
        dispatch(setUsers(payload));
    }
    dispatch(loading(false));
}
export const addUser = (user) => async(dispatch) => {
    const response = await Api.addUser(user);
    const newUser = {
        ...user,
        id: response.data.name
    };
    dispatch(setUser(newUser));
};
export const deleteUser = (userId) => async(dispatch) => {
    await Api.deleteUser(userId);
    dispatch(onUserDelete(userId));
};