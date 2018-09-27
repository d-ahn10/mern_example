const express = require('express');
const PORT = process.env.PORT || 8000;

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>My awesome node server! w00t!</h1>');
});

app.listen(PORT, () => {
    console.log('Server is listening on Port: ' + PORT);
});


