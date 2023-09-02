import React from "react";
import BarLoader from "../components/loaders/Bar";
import { Flowbite } from 'flowbite-react';

const Container = ({ children }) => {
    return <Flowbite theme={{dark: false}}>
        <div className='full-screen 2xl:container 2xl:mx-auto'>
            <BarLoader/>
            { children }
        </div>
    </Flowbite>
};

export default Container;
