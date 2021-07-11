import React, { useState } from 'react';
import ProgressBar from './progressBar';

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {

        //모든 파일 가져옴 -> e.target.files 
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            // if we have files & type is correct ,  update the state
            setFile(selected);
            setError('')
        } else {
            setFile(null); // reset the value 
            setError('please select an image file (png or jpeg)');
        }
    }
    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error"> {error} </div>}
                {file && <div className="">{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    );
}

export default UploadForm;