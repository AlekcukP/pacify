import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, ref } from 'yup';
import { SHA256 } from 'crypto-js';
import _ from 'lodash';

import { useDispatch, useSelector } from 'react-redux';
import { setFormState } from "../../store/interactive/signup";

import Button from '@/js/components/common/button';
import Input from '@/js/components/common/input';
import Form from "../../components/common/form";
import { INPUT_TYPES } from "../../constants/components";

const SignupForm = () => {
    const signupSchema = object({
        email: string().email().required('Email is required'),
        first_name: string().min(3).required('First name is required'),
        last_name: string().required().min(3).required('Last name is required'),
        password: string().oneOf([ref('confirm_password'), null], 'Passwords must match').required().min(6).max(30).required('Password is required'),
        confirm_password: string().oneOf([ref('password'), null], 'Passwords must match').min(6).max(30).required('Confirm password is required')
    });

    // const hashedPassword = SHA256(plaintextPassword).toString();

    const { formData, formErrors } = useSelector(state => state.signup);
    const dispatch = useDispatch();

    const { register, handleSubmit, clearErrors, getFieldState, getValues, reset, setError, resetField } = useForm({
        resolver: yupResolver(signupSchema)
    });

    const getFormState = () => {
        return _.reduce(formData, (state, value, key) => {
            const fieldState = getFieldState(key);

            state.data[key] = !fieldState.invalid ? getValues(key) : "";

            state.errors[key] = fieldState.invalid ? {
                message: fieldState.error.message,
                type: fieldState.error.type
            } : {};

            return state;
        }, { errors: {}, data: {} });
    };

    const onSuccess = (data) => {
        return console.log('success')
    };

    const onError = (errors) => {
        const state = getFormState();
        dispatch(setFormState(state));
        reset(_.pickBy(state.data, value => _.isEmpty(value)));
        _.forEach(state.errors, (val, key) => setError(key, { ...val }));
    };

    const resetInvalidFields = () => {

    };



    // useEffect(() => {
    //     _.forEach(formData, (val, key) => setError(key, { ...val }))
    // }, [formErrors]);


    const signupPasswordForm = {
        
    };


    return <Form className='my-8' onSubmit={handleSubmit(onSuccess, onError)}>
        <Input
            className='my-4'
            label="Email"
            type={INPUT_TYPES.EMAIL}
            name="email"
            {...register('email')}
            error={errors?.email?.message}
        />
        <div className='flex justify-between w-full my-4'>
            <Input
                className='basis-[45%]'
                label="First name"
                name="first_name"
                {...register('first_name')}
                error={errors?.first_name?.message}
            />
            <Input
                className='basis-[45%]'
                label="Last name"
                name="last_name"
                {...register('last_name')}
                error={errors?.last_name?.message}
            />
        </div>
        <Input
            className='my-4'
            label="Password"
            name="password"
            type={INPUT_TYPES.PASSWORD}
            {...register('password')}
            error={errors?.password?.message}
        />
        <Input
            className='my-4'
            label="Confirm password"
            name="confirm_password"
            type={INPUT_TYPES.PASSWORD}
            {...register('confirm_password')}
            error={errors?.confirm_password?.message}
        />

        <Button className="btn-primary" type="submit">Create an Account</Button>
    </Form>;
};

export default SignupForm;
