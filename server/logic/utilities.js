//test an id and see if it's already present in array

function getID(ID, array){
  for (var i = 0; i < array.length; i++) {
    if(array[i].id === ID){
      return array[ID];
     }
    }
    return 'doesn\'t exist bro!';
}

function putID(ID, array, name){
  for (var i = 0; i < array.length; i++) {
    if(array[i].id === ID){
      array[ID].name = name;
      return array;
    }
  } return 'That ID\'s not here bro!';
}

function postID(array, name){
  for (var i = 0; i < array.items.length; i++) {
    if(array.items[i].name === name){
      return 'That\'s already here!!!';
    }
  }
  array.addItem(name);
  return array;
}

function deleteID(ID, arrayItems, array){
  for (var i = 0; i < arrayItems.length; i++) {
    if(arrayItems[i].id === ID){
      arrayItems.splice(i, 1);
      for (var j = 0; j < arrayItems.length; j++) {
        arrayItems[j].id = j;
      }
      array.id -= 1;
      return ({
          message : 'done'
        });
      }
    }
      return ({
        message: 'wrong ID buddy!'
      });
  }

module.exports = {
  deleteID : deleteID,
  getID: getID,
  putID: putID,
  postID: postID,
};
