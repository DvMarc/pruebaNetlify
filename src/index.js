const express = require('express');
const app = express();

const port = 5699

app.listen((res)=>{
    app.get('/',(req, res)=>{res.status(200).send(`Server is running on port ${port}`)})
    console.log(`Server is running on port ${port}`);
});