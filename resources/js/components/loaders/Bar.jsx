import React, { useState, useEffect } from 'react';
import classnames from 'tailwindcss-classnames';
import { useCommon } from '../../hooks/useCommon';
import { Progress } from 'flowbite-react';


const BarLoader = () => {
    const [progress, setProgress] = useState(10);
    const { isLoading } = useCommon();

    useEffect(() => {
        let interval;
        let speed = 1;

        if (isLoading) {
            interval = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress < 100) {
                        if (speed < 2) speed += 0.1;
                        return prevProgress + speed;
                    }
                    return prevProgress;
                });
            }, 1000);

            setTimeout(() => clearInterval(interval), 60000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isLoading]);

    return <Progress
        color={BarLoader.colors.blue}
        size={BarLoader.sizes.sm}
        progress={progress}
        theme={{
            bar: 'rounded-none',
            base: classnames(
                'rounded-none',
                'hidden',
                { 'block': isLoading }
            )
        }}
    />
}

BarLoader.sizes = {
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl'
};

BarLoader.colors = {
    dark: 'dark',
    blue: 'blue',
    red: 'red',
    green: 'green',
    yellow: 'yellow',
    indigo: 'indigo',
    purple: 'purple'
};

export default BarLoader;
