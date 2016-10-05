//CALL THE O.R.M FUNCTIONS USING BURGER SPECIFIC INPUT FOR THE O.R.M.

var orm = require('../config/orm.js');

var burgers = {
	all: function (cb) {
		orm.all('burgers', function (res) {
			cb(res);
		});
	},
	//COLS AND VALS ARE ARRAYS	
	create: function(cols, vals, cb) {
		orm.create('burgers', cols, vals, function (res){
			cb(res);
		});
	},
	devour: function (objColVals, condition, cb) {
		orm.devour('burgers', objColVals, condition, function (res) {
			cb(res);
		})
	},
	clear: function (condition, cb) {
		orm.clear('burgers', condition, function (res) {
			cb(res);
		});
	}
};

module.exports = burgers;	