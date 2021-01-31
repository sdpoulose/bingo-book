const express = require('express');

const app = express();

//ROUTES
app.get('/', (req, res) => {
    res.send("Hello World!")
});

app.listen(3000, () => console.log("Server started on Port 3000"));