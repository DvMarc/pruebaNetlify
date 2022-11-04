const express = require('express');
const app = express();
app.listen(port,(res)=>{
  app.get('/',(req, res)=>{res.status(200).send(`Server is running on port ${port}`)})
  console.log(`Server is running on port ${port}`);
});