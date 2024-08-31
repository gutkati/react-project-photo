import React from 'react';
import styles from './Input.module.css'

const Input = ({name, id, value, onChange, placeholder}) => {
    return (
        <input
            className={styles.input}
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default Input;