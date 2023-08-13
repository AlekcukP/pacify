import React from "react";
import Icon from "../../common/icon";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineAreaChart } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { BsFillBagCheckFill } from "react-icons/bs";
import { BsCircleFill } from "react-icons/bs";
import { MdDiscount } from "react-icons/md";

export const Circle = props => <Icon {...props} size={10} component={ BsCircleFill }/>
export const Discount = props => <Icon {...props} size={18} component={ MdDiscount }/>
export const Marketing = props => <Icon {...props} size={18} component={ BsFillBagCheckFill }/>
export const Analytics = props => <Icon {...props} size={18} component={ AiOutlineAreaChart }/>
export const Customer = props => <Icon {...props} size={18} component={ BiSolidUser }/>
export const Home = props => <Icon {...props} size={18} component={ AiFillHome }/>
