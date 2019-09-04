import React, {useReducer} from 'react';
import AlertContext from './alertContext';
import AlertReducer from './AlertReducer';

import {SET_ALERT, REMOVE_ALERT} from '../types';

const AlertState = props => {
    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    //set alert
    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            payload: {msg, type}
        });
        setTimeout(() => removeAlert(), 4000);
      }

    //remove alert
      const removeAlert = () => dispatch({type: REMOVE_ALERT});

    return(
        <AlertContext.Provider value = {{
            alert: state,
            setAlert
            }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;