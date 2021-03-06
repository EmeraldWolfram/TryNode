var express = require('express'),
        app = express(),
       port = process.env.PORT || 52225,
 bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes  = require('./api/routes/tryRoutes'); //importing route

routes(app); //register the route
app.listen(port);
console.log('try RESTful API server started on: ' + port);