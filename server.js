const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the current directory
app.use(express.static(__dirname));

// Send the index.html file on the root route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Set the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
