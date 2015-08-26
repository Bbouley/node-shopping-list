var express = require('express');
var router = express.Router();
var app = express();
var utilities = require('../logic/utilities.js');



router.get('/items', function(req, res){
  res.json(storage.items);
});

router.get('/item/:id', function(req, res){
   var response = utilities.getID(parseInt(req.params.id), storage.items);
   res.json(response);
});

// router.get('/items/:id/edit', function(req, res){
//   var item = storage.items[req.params.id];
//   res.render('edit', {item: item});
// });

router.post('/items', function(req, res){
  var response = utilities.postID(storage, req.body.name);
  res.json(response);
});

router.put('/item/:id', function(req, res){
  var response = utilities.putID(parseInt(req.params.id), storage.items, req.body.name);
  res.json(response);
});

router.delete('/item/:id', function(req, res, next){
 var response = utilities.deleteID(parseInt(req.params.id), storage.items, storage);
  res.json(response);
});




function ItemLibrary(){
  this.items = [];
  this.id = 0;
}

ItemLibrary.prototype.addItem = function(name){
  var newItem = {name:name, id:this.id};
  this.items.push(newItem);
  this.id += 1;
};

ItemLibrary.prototype.findItem = function(id){
  var item = storage.items[id];
  return item;
};

var storage = new ItemLibrary();
storage.addItem('noodles');
storage.addItem('Tomatoes');
storage.addItem('Peppers');

module.exports = router;
