// external middleware
const express = require('express');

// internal middleware
const authRouter = require('./routes/auth');

const app = express();

app.use(express.static('public'));

// app.use(authRouter);

app.listen(3000, () => {
	console.log('Application is running....');
});
