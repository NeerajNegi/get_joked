var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.listen(process.env.PORT || 5000);
console.log("Server running on port 5000");