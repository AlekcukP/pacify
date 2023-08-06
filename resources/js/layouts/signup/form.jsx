import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, ref } from 'yup';

import Button from '@/js/components/common/button';
import Input from '@/js/components/common/input';
import Form from "../../components/common/form";
import { INPUT_TYPES } from "../../constants/components";

const SignupForm = () => {
    const signupSchema = object({
        email: string().email().required('Email is required').default(''),
        first_name: string().min(3).required('First name is required'),
        last_name: string().required().min(3).required('Last name is required'),
        password: string().required().min(6).max(30).required('Password is required').default(''),
        confirm_password:  string().oneOf([ref('password'), null], 'Passwords must match').required('Confirm password is required').default('')
    });

    const { register, handleSubmit, reset, clearErrors, formState:{ errors } } = useForm({
        resolver: yupResolver(signupSchema)
    });

    const onSubmit = (data) => {
        console.log(data, 'data')
        // reset();
    };

    const onError = (e) => {
        reset({
            password: "",
            confirm_password: ""
        }, {
            keepErrors: true,
            keepDirty: false,
        });
        console.log(e, 'e')
    };

    return <Form className='my-8' onSubmit={handleSubmit(onSubmit, onError)}>
        <Input
            className='my-4'
            label="Email"
            type={INPUT_TYPES.EMAIL}
            name="email"
            {...register('email')}
            error={errors?.email?.message}
            onChange={() => clearErrors('confirm_password')}
        />
        <div className='flex justify-between w-full my-4'>
            <Input
                className='basis-[45%]'
                label="First name"
                name="first_name"
                {...register('first_name')}
                error={errors?.first_name?.message}
                onChange={() => clearErrors('confirm_password')}
            />
            <Input
                className='basis-[45%]'
                label="Last name"
                name="last_name"
                {...register('last_name')}
                error={errors?.last_name?.message}
                onChange={() => clearErrors('confirm_password')}
            />
        </div>
        <Input
            className='my-4'
            label="Password"
            name="password"
            type={INPUT_TYPES.PASSWORD}
            {...register('password')}
            error={errors?.password?.message}
            onChange={() => clearErrors('confirm_password')}
        />
        <Input
            className='my-4'
            label="Confirm password"
            name="confirm_password"
            type={INPUT_TYPES.PASSWORD}
            {...register('confirm_password')}
            error={errors?.confirm_password?.message}
            onChange={() => clearErrors('confirm_password')}
        />

        <Button className="btn-primary" type="submit">Create an Account</Button>
    </Form>;
};

export default SignupForm;
