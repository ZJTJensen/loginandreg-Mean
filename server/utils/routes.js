const users = require('./../controllers/users.js');
const {resolve} = require('path');

module.exports = function(app) {
	
	app.get("/session", (req,res)=>{
		users.session(req, res);
	})
	app.post('/login', (req,res)=>{
	  users.login(req,res);
	});
	app.get('/users',(req,res)=>{
		users.findAll(req,res)
	});
	app.delete('/all', (req,res)=>{
		users.delAll(req,res)
	})
	app.post('/register', (req,res) =>{
	  users.register(req,res);
	})
	app.get('*', (req,res)=>{
		res.sendFile(resolve(__dirname, '..','..','public', 'dist', 'index.html'))
	})
}