import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Divider = ({ margin, text }) => {
    return <div className={`flex items-center text-gray-400 font-extralight my-${margin ?? Divider.defaultProps.margin}`}>
        <div className={`h-px w-full bg-gray-400`}></div>

        {text ? <Fragment>
            <p className='mx-4'>{text}</p>
            <div className={`h-px w-full bg-gray-400`}></div>
        </Fragment> : null}
    </div>

};

Divider.propTypes = {
    margin: PropTypes.number,
    text: PropTypes.string
};

Divider.defaultProps = {
    margin: 0,
};

export default Divider;
