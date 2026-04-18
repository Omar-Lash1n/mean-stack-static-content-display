const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the Angular app build directory
const angularBuildPath = path.join(__dirname, 'client', 'dist', 'client', 'browser');
app.use(express.static(angularBuildPath));

// Send all other requests back to the Angular app
app.use((req, res) => {
  res.sendFile(path.join(angularBuildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running locally on http://localhost:${PORT}`);
});

module.exports = app;
