import React from 'react';
import Wrapper from './wrapper';

import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";


export const Google = props => <Wrapper {...props}><FcGoogle/></Wrapper>;
export const Facebook = props => <Wrapper {...props} color="#4267B2"><BiLogoFacebookCircle/></Wrapper>;
