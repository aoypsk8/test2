const express = require('express');
const path = require('path');
const app = express();
const port = 4000; // Change this to a different port

// Serve the static files from the Flutter build directory
app.use(express.static(path.join(__dirname, 'web')));

// Catch all routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/web', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
