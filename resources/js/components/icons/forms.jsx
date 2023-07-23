import React from 'react';
import Wrapper from './wrapper';

import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { BsFillExclamationCircleFill } from "react-icons/bs";


export const Eye = props => <Wrapper {...props} className='cursor-pointer input-icon' color="#a1a1aa">
    <AiFillEye/>
</Wrapper>;

export const InvisisbleEye = props => <Wrapper {...props} className='cursor-pointer input-icon' color="#a1a1aa">
    <AiFillEyeInvisible/>
</Wrapper>;

export const Exclamation = props => <Wrapper {...props} size={14}>
    <BsFillExclamationCircleFill/>
</Wrapper>;
