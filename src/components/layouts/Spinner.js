import React, {Fragment} from 'react';

import spinner from '../../assets/images/spinner.gif';

const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner} alt="loading..." style={{width: '7rem', margin: 'auto', display: 'block'}}/>
        </Fragment>
    )
}

export default Spinner;
