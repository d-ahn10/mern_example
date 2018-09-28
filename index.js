const express = require('express');
const PORT = process.env.PORT || 9000;
const { resolve } = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.static(resolve(__dirname, 'client', 'dist')));
app.use(express.json());

app.post('/api/login', (req, res) => {
    console.log('POST DATA:', req.body);


    res.send({
        success: true,
        message: 'You are now logged in!', //user data message more likely
        receivedData: req.body
    });
});

app.get('/api/test', (req, res) => {
    // res.send('<h1>My awesome node server! w00t!</h1>');
    res.send({
        success: true,
        message: 'The API is working',
        date: new Date().toDateString()
    });
});

app.get('/api/user', (req, res) => {
    res.send({
        name: "Dave",
        age: 28,
        email: 'theRealDave@mail.com'
    });
});

app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server is listening on Port: ' + PORT);
});
