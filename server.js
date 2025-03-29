const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the current directory
app.use(express.static(__dirname));

// Send the chess.html file on the root route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "chess.html"));
});

// Set the port to the environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server and listen on 0.0.0.0 to allow external access
app.listen(PORT, "0.0.0.0", () => {
    console.log(`✅ Server is running at: http://0.0.0.0:${PORT}`);
});
