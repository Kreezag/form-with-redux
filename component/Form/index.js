import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { store } from '../../index';
import { setPassword, setErrors } from '../../actions'



class Form extends Component {
    render() {

        const clickHandler = () => {
            let errors = '';

            const passField = document.getElementById('pass');
            const newPassField = document.getElementById('newPass');

            const passValue = String(passField.value).trim();
            const newPassValue = String(newPassField.value).trim();

            const currentPass = store.getState().password;

            if (!passValue || !newPassValue) {

                errors = 'Поля должны быть заполнены';
            } else if (currentPass !== passValue) {
                errors = 'Вы ввели неверный текущий пароль';
            } else if (passValue === newPassValue) {
                errors = 'Новый пароль должен отличатся от старого';
            }

            if (newPassValue && currentPass === passValue && passValue !== newPassValue) {
                this.props.setPassword(newPassValue)
            }

            this.props.setErrors(errors);

            console.log(errors);
        };



        return <div  className="appHeader">
            My form
            Current password is {this.props.password}
            <form id="myForm" className="myForm">
                <label className="myLabel">
                Set current password
                <input className="myInput" type="text" name="pass" id="pass"/>
                </label>
                <label className="myLabel">
                Set new password
                <input className="myInput" type="text" name="newPass" id="newPass"/>
                </label>
                { this.props.errors && (<div className="myFormErrors">{this.props.errors}</div>)}
                <button className="myButton" type="button" onClick={clickHandler}>Change password</button>
            </form>
        </div>
    };
};


function mapStateToProps (state) {
    return {
        password: state.password,
        errors: state.errors
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setPassword: bindActionCreators(setPassword, dispatch),
        setErrors: bindActionCreators(setErrors, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Form);