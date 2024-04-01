// app.js

const express = require('express');
const app = express();
const PORT = 3000;

// Sample JSON data
const jsonData = {
    message: 'Hello from the server!',
    data: [1, 2, 3, 4, 5]
};

// Define route to serve JSON data
app.get('/api/data', (req, res) => {
    res.json(jsonData);
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
