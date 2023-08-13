import React, { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';


const BarLoader = () => {
    const [progress, setProgress] = useState(0);


    return <LoadingBar
        progress={progress}
        shadow={true}
        height={5}
        onLoaderFinished={() => setProgress(0)}
    />;
}

export default BarLoader;
