const express = require('express');
const multer = require('multer');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');


const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/process-image', upload.single('image'), (req, res) => {
    const imagePath = req.file.path;

    // Call Python script to process the image

    const python = spawn('python', ["../src/components/Ocr/ocr.py", imagePath]);

    python.stdout.on('data', (data) => {
        res.json({ result: data.toString() });
    });

    python.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
        res.status(500).send(data.toString());
    });

    python.on('close', (code) => {
        fs.unlinkSync(imagePath);  // Delete the file after processing
        console.log(`Python script exited with code ${code}`);
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});