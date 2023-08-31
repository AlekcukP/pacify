import React from 'react';
import {classnames} from 'tailwindcss-classnames';
import { useCommon } from '../../hooks/useCommon';


const BarLoader = () => {
    const { isLoading } = useCommon();

    return <div className={classnames('h-1', 'fixed w-full', 'bg-transparent', { ['hidden']: !isLoading}) }>
        <div className={classnames('animate-progress', 'h-1', 'bg-cyan-600')}></div>
    </div>
}

export default BarLoader;
