var express = require('express');
var router = express.Router();
var methodOverride =require('method-override');
var app = express();

app.use(methodOverride('_method'));

router.get('/items', function(req, res){
  res.json(storage.items);
});

router.get('/items/:id', function(req, res){
   res.json(storage.items[req.params.id]);
});

router.get('/items/:id/edit', function(req, res){
  var item = storage.items[req.params.id];
  res.render('edit', {item: item});
});

router.post('/items', function(req, res){
  storage.addItem(req.body.name);
  res.json(storage);
});

router.put('/items/:id', function(req, res){
  console.log(req.body.name);
  var index = req.params.id;
  storage.items[index].name =req.body.name;
  // res.redirect('/items/:' + req.params.id );
  res.json(storage);
});

router.delete('/items/:id', function(req, res, next){
  console.log('testing delete route');
  for (var i = 0; i < storage.items.length; i++) {
    if(storage.items[i].id === parseInt(req.params.id)){
      storage.items.splice(i, 1);
    }
  }
  res.json(storage);
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