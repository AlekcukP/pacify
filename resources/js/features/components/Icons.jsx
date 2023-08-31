import React from "react";
import Icon from "../../components/Icon";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineAreaChart } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { BsFillBagCheckFill } from "react-icons/bs";
import { BsCircleFill } from "react-icons/bs";
import { MdDiscount } from "react-icons/md";

export const ChevronUp = props => <Icon {...props} color="#6b7280" component={ BiChevronUp }/>
export const ChevronDown = props => <Icon {...props} color="#6b7280" component={ BiChevronDown }/>

export const Circle = props => <Icon {...props} size={10} color="#6b7280" component={ BsCircleFill }/>
export const Discount = props => <Icon {...props} size={18} color="#6b7280" component={ MdDiscount }/>
export const Marketing = props => <Icon {...props} size={18} color="#6b7280" component={ BsFillBagCheckFill }/>
export const Analytics = props => <Icon {...props} size={18} color="#6b7280" component={ AiOutlineAreaChart }/>
export const Customer = props => <Icon {...props} size={18} color="#6b7280" component={ BiSolidUser }/>
export const Home = props => <Icon {...props} size={18} color="#6b7280" component={ AiFillHome }/>
