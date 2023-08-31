import React from "react";
import PropTypes from 'prop-types';
import '@/css/widgets/theme-toggle.css';

const ThemeToggle = ({ size, onChange }) => {
    return <div class="switch" style={{transform: `scale(${size})`}}>
        <label for="toggle">
            <input id="toggle" class="toggle-switch" type="checkbox" onChange={onChange}/>
                <div class="sun-moon">
                    <div class="dots"></div>
                </div>
                <div class="background">
                    <div class="stars-first"></div>
                    <div class="stars-second"></div>
                </div>
        </label>
    </div>
};

ThemeToggle.propTypes = {
    size: PropTypes.number,
    onChange: PropTypes.func
};

ThemeToggle.defaultProps = {
    size: 0.4,
};

export default ThemeToggle;
