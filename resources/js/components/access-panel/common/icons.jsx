import React from 'react';
import Icon from '../../common/icon';

import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { IoMail } from "react-icons/io5";

export const Google = props => <Icon {...props} component={<FcGoogle/>} />;
export const Facebook = props => <Icon {...props} color="#4267B2" component={<BiLogoFacebookCircle/>} />;
export const Mail = props => <Icon {...props} component={<IoMail/>} />;
