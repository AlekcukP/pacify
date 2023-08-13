import React, { Fragment, useState } from "react";
import Divider from '../../common/divider';
import Button from '../../common/forms/button';
import Input from '../../common/forms/input';
import { Facebook } from "../common/icons";
import { Google } from "../common/icons";

const Form = () => {
    const [email, setEmail] = useState('');

    return <Fragment>
        <div>
            <Input
                className="mb-2"
                label="Email"
                type="email"
                value={email}
                onChange={(val) => setEmail(val)}
                required={true}
                placeholder={"Email"}
            />

            <Button className="btn-primary" onClick={() => console.log('continue with email')}>
                Continue with Email
            </Button>
        </div>

        <Divider margin={4} text={"or"}/>

        <div>
            <Button className='btn-bordered' onClick={() => console.log('google sign up')}>
                <Google className='mr-3'/>
                <span>Continue with Google</span>
            </Button>
            <Button className='btn-bordered my-4' onClick={() => console.log('facebook sign up')}>
                <Facebook className='mr-3'/>
                <span>Continue with Facebook</span>
            </Button>
        </div>
    </Fragment>
};

export default Form;
