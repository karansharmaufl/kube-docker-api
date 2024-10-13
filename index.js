const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

app.post('/', (req, res) => {
    res.status(200).json({
        message: 'Data received successfully',
        receivedData: req.body
      });
  });

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});