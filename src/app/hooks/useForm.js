import { useState } from 'react';

export const useForm = (callback, validate) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.prevenDefault();
        if (Object.keys(errors).length === 0) {
            callback();
        }
    };

    const handleChange = (event) => {
        event.preventDefault();
        setErrors(validate(event.target.name));
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    return {
        handleChange,
        handleSubmit,
        errors,
    };
};
