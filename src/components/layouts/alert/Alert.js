import React from 'react';

import './Alert.scss';

const Alert = ({alert}) => alert !== null && <div className={`alert alert-${alert.type}`}>
            <i className="fas fa-info-circle"></i> {alert.msg}
            </div>


export default Alert;
