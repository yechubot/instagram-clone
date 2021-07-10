import React from 'react';
import useStorage from './useStorage';


const ProgressBar = ({file,setFile}) => {

    const {url, progress} = useStorage(file);
    console.log(progress,url);

    return ( 
        <div className="progress-bar" 
        style={{width : progress + '%'}}>
            progress
        </div>
     );
}
 
export default ProgressBar;