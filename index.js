'use strict';

import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';

const LOAD_NEW_PASSWORD = 'LOAD_NEW_PASSWORD';

const defaultPassword = 'myPassword';


const initialState = {
    currentPassword: defaultPassword
};


//action creator
const actionCreator = (currentPassword) => ({
    type: LOAD_NEW_PASSWORD,
    currentPassword
});

//action
const defaultAction = actionCreator(defaultPassword);


// reducer
const setNewPassword = (state = initialState, action) => {
    if (action.type === LOAD_NEW_PASSWORD) {
        return Object.assign({}, state, action)
    }

    return state;
};

//store
let store = createStore(setNewPassword, defaultAction);



const newAction = actionCreator('newPassword');

store.dispatch(newAction);




const App = () => (
    <div>
        <div className="appHeader">My form</div>
        <form className="myForm">
            <label className="myLabel">
            Set current password
                <input className="myInput" type="text" name="password"/>
            </label>
            <label className="myLabel">
            Set new password
                <input className="myInput" type="text" name="password"/>
            </label>
            {/*{ errors && (<div className="myFormErrors">{errors}</div>)}*/}
            <button className="myButton">Change password</button>
        </form>
    </div>
);

// App.propTypes = {
//     onChangeValue: PropTypes.func
// };

render((<App/>),
    document.getElementById('react-root')
);
