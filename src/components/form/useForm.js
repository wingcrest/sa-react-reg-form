import { useState, useEffect } from "react";

const useForm = (callback, validateForm) => {
    const [values, setValues] = useState({
        fname: '',
        lname: '',
        username: '',
        phone: '',
        email: '',
        gender: '',
        date: null,
        country: '',
        company: '',
        homeAddress: '',
        compAddress: '',
        password: '',
        cPassword: '',
        terms: false,
        updates: false
    })

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        setErrors(validateForm(values));
        setIsSubmitting(true);
    }

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback();
            }
        },
        [errors]
    );

    return { handleChange, values, handleSubmit, errors };
}

export default useForm;