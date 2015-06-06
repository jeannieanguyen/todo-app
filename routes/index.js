var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('todo.ejs');
});

// router.get('/helloworld', function(req,res) {
// 	res.render('helloworld.ejs'); 
// });

// router.get('/userlist', function(req,res){
// 	var db = req.db; 
// 	var collection = db.get('activities'); 
// 	collection.find({}, {}, function(e, docs){
// 		res.render('userlist', {
// 			"userlist" : docs
// 		});
// 	});
// });

module.exports = router;
