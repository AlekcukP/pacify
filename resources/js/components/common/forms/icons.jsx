import React from 'react';
import Icon from '../Icon';
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { BsFillExclamationCircleFill } from "react-icons/bs";

export const Eye = props => <Icon {...props} size={20} color="#a1a1aa" component={AiFillEye}/>
export const InvisisbleEye = props => <Icon {...props} size={20} color="#a1a1aa"  component={AiFillEyeInvisible}/>
export const Exclamation = props => <Icon {...props} size={12} component={BsFillExclamationCircleFill}/>
