const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from MOOC!!");
});
 
module.exports.app = app;
