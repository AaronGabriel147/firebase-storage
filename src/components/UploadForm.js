import React, { useState } from 'react';
import ProgressBar from './ProgressBar';


const UploadForm = () => {
    // changeHandler states
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg', 'image/gif'];

    const handleChange = (e) => {
        let selected = e.target.files[0];
        // console.log(selected)
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError(''); // If use selects a valid file after an invalid file.
        } else {
            setFile(null); // If user selected an invalid file.
            setError('Please select a file type of (.PNG, .JPEG, or .GIF)');
        }
    };


    return (

        <form>
            <label>
                <input type="file" onChange={handleChange} />
                <span>UPLOAD</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>

    )
}

export default UploadForm;