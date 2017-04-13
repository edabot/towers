import { CREATE_USER, FETCH_USER } from '../actions/index';

const INITIAL_STATE = { all: [], post: null }

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        default:
            return state;
    }
}
