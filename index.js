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


console.log(store.getState());




const App = () => {

    const clickHandler = (value) => {
        console.log(value);
        store.dispatch(newAction);
        console.log(store.getState());
    };

    const value = 'myInput';

    const onChange = () => {
        console.log('data');
    };

    return (
        <div  className="appHeader">
            My form
            <form className="myForm" onChange={onChange()}>
                <label className="myLabel">
                Set current password
                    <input className="myInput" type="text" name="password"/>
                </label>
                <label className="myLabel">
                Set new password
                    <input className="myInput" type="text" name="newPassword"/>
                </label>
                {/*{ errors && (<div className="myFormErrors">{errors}</div>)}*/}
                <button className="myButton" type="button" onClick={clickHandler(value)}>Change password</button>
            </form>
        </div>
    )
};

// App.propTypes = {
//     onChangeValue: PropTypes.func
// };

render((<App/>),
    document.getElementById('react-root')
);
