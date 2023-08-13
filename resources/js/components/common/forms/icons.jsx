import React from 'react';
import Icon from '../icon';
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { BsFillExclamationCircleFill } from "react-icons/bs";

export const Eye = props => <Icon {...props} className='cursor-pointer input-icon' color="#a1a1aa" component={AiFillEye}/>
export const InvisisbleEye = props => <Icon {...props} className='cursor-pointer input-icon' color="#a1a1aa"  component={AiFillEyeInvisible}/>
export const Exclamation = props => <Icon {...props} size={14} component={BsFillExclamationCircleFill}/>
