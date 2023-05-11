const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, '.')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`[loma.rip]: Hosting server is running on port ${port}`);
});