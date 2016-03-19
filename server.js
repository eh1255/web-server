var express = require('express');
var app = express();

// Control + C stops the server in the console
// __dirname is a built in variable that give the full file path

// / is the root url
// req includes all infro from user
// res is used to send data back

// Import the middleware we wrote in a different file
var middleware = require('./middleware.js');


// Middleware called on every request
app.use(middleware.logger);

// Create an about page. Middleware only called on this path
app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About us!!!');
})

app.use(express.static(__dirname+ '/public'));


// 3000 usually isn't used so it won't cause any conflicts with system trash
// The second argument, a function, gets called when the server starts up
// Using all upper case indicates that the variable is meant to be a constant, like let in swift.
var PORT = 3000;

app.listen(PORT, function() {
	console.log('Server started up on port ' + PORT);
});
