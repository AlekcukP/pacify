import React, { useState } from "react";
import Button from '@/js/components/common/button';
import Input from '@/js/components/common/input';
import { INPUT_TYPES } from "../../constants/components";

const Form = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return <div className='my-8'>
        <Input
            className='my-4'
            label="Email"
            type="email"
            value={email}
            onChange={(val) => setEmail(val)}
            required={true}
        />
        <div className='flex justify-between w-full my-4'>
            <Input
                className='basis-[45%]'
                label="First name"
                value={firstName}
                onChange={(val) => setFirstName(val)}
                required={true}
            />
            <Input
                className='basis-[45%]'
                label="Last name"
                value={lastName}
                onChange={(val) => setLastName(val)}
                required={true}
            />
        </div>
        <Input
            className='my-4'
            label="Password"
            type={INPUT_TYPES.PASSWORD}
            value={password}
            onChange={(val) => setPassword(val)}
            required={true}
        />
        <Input
            className='my-4'
            label="Confirm password"
            type={INPUT_TYPES.PASSWORD}
            value={confirmPassword}
            onChange={(val) => setConfirmPassword(val)}
            required={true}
        />

        <Button className="btn-primary" onClick={() => console.log('create')}>Create an Account</Button>
    </div>;
};

export default Form;
