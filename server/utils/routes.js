const users = require('./../controllers/users.js');
const {resolve} = require('path');

module.exports = function(app) {
	app.get('/', (req, res) => {
	  user.show(req, res);
	});
	
	app.post('/login', (req,res)=>{
	  user.login(req,res);
	});
	
	app.post('/register', (req,res) =>{
	  user.register(req,res);
	})
}