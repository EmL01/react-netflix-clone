const express = require('express'),
    app = express(),
    PORT = process.env.PORT || 4000,
    fs = require('fs'),
    path = require('path')

app.use(express.static('client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})