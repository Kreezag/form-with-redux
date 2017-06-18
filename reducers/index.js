import { LOAD_NEW_PASSWORD, SET_ERRORS } from '../actions';

const initialState = {
    password: 'myPassword',
    errors: ''
};

export default function passwordState(state = initialState, action) {

    if (action.type === LOAD_NEW_PASSWORD) {
        return  Object.assign({}, state, {
            password: action.payload
        })
    }

    if (action.type === SET_ERRORS && action.payload !== null) {
        return  Object.assign({}, state, {
            errors: action.payload
        })
    }

    return state;
};
