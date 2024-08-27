import React from 'react';

const Input = ({name, id, value, onChange, placeholder}) => {
    return (
        <input
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default Input;