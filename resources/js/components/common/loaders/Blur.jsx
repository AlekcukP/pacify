import React from 'react';
import { classnames } from 'tailwindcss-classnames';
import { Spinner } from 'flowbite-react';
import { useCommon } from '../../../hooks/useCommon';


const BlurSpinner = () => {
    const { isLoading } = useCommon();

    return <div className={classnames('h-full', 'w-full', 'absolute', 'top-0', 'left-0',{ ['hidden']: !isLoading })}>
        <div className={classnames('w-full', 'h-full', 'absolute', 'z-10', 'flex', 'items-center', 'justify-center')}>
            <Spinner size="xl"/>
        </div>
        <div className={classnames('w-full', 'h-full', 'bg-white/50', 'blur-sm', 'backdrop-blur-sm')}></div>
    </div>
}

export default BlurSpinner;
