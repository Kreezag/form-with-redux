
//action
export const LOAD_NEW_PASSWORD = 'LOAD_NEW_PASSWORD';
export const SET_ERRORS = 'SET_ERRORS';



//action creator
export const setPassword = (pass) => ({
    type: LOAD_NEW_PASSWORD,
    payload: pass
});

export const setErrors = (error) => ({
    type: SET_ERRORS,
    payload: error
});