import React, { useState } from 'react';

function ImageUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [result, setResult] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('image', selectedFile);

        const response = await fetch('http://localhost:5000/process-image', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        setResult(data.result);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {result && <div>Result: {result}</div>}
        </div>
    );
}

export default ImageUpload;