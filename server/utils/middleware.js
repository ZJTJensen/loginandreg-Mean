const path = require('path');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

module.exports = function(app) {
	'use strict';
	app.use(session({secret: "Zachisaboss"}));
	app.use(express.static(path.join(__dirname,'/../../public/dist')))
	app.use(bodyParser.json())
	console.log('Middleware initialized');
};
