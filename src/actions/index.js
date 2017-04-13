import axios from 'axios';

export const CREATE_USER = 'CREATE_USER';
export const FETCH_USER = 'FETCH_USER';

export function createUser() {
    const request = axios.get(``)

    return {
        type: FETCH_USER,
        payload: request
    };
}
