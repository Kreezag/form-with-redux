'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Form from './component/Form';
import { configureStore } from './store/configureStore'



export const store = configureStore();






render (
    <Provider store={store}>
        <Form />
    </Provider>,
    document.getElementById('react-root')
);

// App.propTypes = {
//     onChangeValue: PropTypes.func
// };

