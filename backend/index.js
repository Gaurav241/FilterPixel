const express = require('express');
const cors = require('cors'); // Allow cross-origin requests
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all routes

// Sample API route
app.get('/api', (req, res) => {
    res.json({ message: "Backend is connected to the frontend!" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
