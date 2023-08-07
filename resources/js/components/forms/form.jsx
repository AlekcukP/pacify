import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, style, className, children, name, id }) => {
    return <form
        onSubmit={onSubmit}
        style={style}
        className={className}
        name={name}
        id={id}
    >
        { children }
    </form>
};

Form.propTypes = {
    onSubmit: PropTypes.func,
    style: PropTypes.object,
    className: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
};

Form.defaultProps = {
    style: {},
    className: '',
    name: null,
    id: null,
};

export default Form;
