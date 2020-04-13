
module.exports = class User{
	getIndexPage(req, res, next){
		res.render('personalpage', { 
  			title: 'ETestejs',
  			name: req.query.username
  		});
	}
}
