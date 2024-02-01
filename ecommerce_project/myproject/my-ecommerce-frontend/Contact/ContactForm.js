import React from 'react';
import { useForm } from 'react-hook-form';

function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        //handle form submissions here (e.g., submit data to backend)
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name:</label>
                <input type="text" {...register('name', { required: true})} />
                {errors.name && <span>Name is required</span>}
            </div>
            <div>
                <label>Email:</label>
                <input type="email" {...register('email', { required: true})} />
                {errors.email && <span>Email is required</span>}
            </div>
            <div>
                <label>Message:</label>
                <textarea {...register('message', { required: true})} />
                {errors.message && <span>Message is required</span>}
            </div>
        </form>
    );
}

export default ContactForm;