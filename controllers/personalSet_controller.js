module.exports = class User{
	getIndexPage(req, res, next){
		res.render('personalSet', { 
  			title: 'ETestejs',
  			name: req.query.username,
  			token:req.query.token
  		});
	}
}
