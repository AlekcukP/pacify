import React from 'react';
import Wrapper from './wrapper';

import { AiFillHome } from "react-icons/ai";
import { AiOutlineAreaChart } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { BsFillBagCheckFill } from "react-icons/bs";
import { BsCircleFill } from "react-icons/bs";
import { MdDiscount } from "react-icons/md";


export const Circle = props => <Wrapper {...props} size={8}><BsCircleFill/></Wrapper>;
export const Discount = props => <Wrapper {...props} size={18}><MdDiscount/></Wrapper>;
export const Marketing = props => <Wrapper {...props} size={18}><BsFillBagCheckFill/></Wrapper>;
export const Analytics = props => <Wrapper {...props} size={18}><AiOutlineAreaChart/></Wrapper>;
export const Customer = props => <Wrapper {...props} size={18}><BiSolidUser/></Wrapper>;
export const Home = props => <Wrapper {...props} size={18}><AiFillHome/></Wrapper>;
